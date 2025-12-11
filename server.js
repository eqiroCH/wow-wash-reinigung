import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Cache-Datei für Reviews
const CACHE_FILE = path.join(__dirname, 'reviews-cache.json');

// Google Place ID
const PLACE_ID = '0x4b1312d20d878959:0x34d4a23c386c3ec9';

// Funktion zum Laden der Reviews von Google Places API
// HINWEIS: Du musst einen Google Places API Key erstellen und hier eintragen
const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY || '';

async function fetchGoogleReviews() {
  if (!GOOGLE_API_KEY) {
    console.log('⚠️  Kein Google API Key gesetzt. Verwende Fallback-Daten.');
    return {
      rating: 5.0,
      reviewCount: 22,
      reviews: [
        {
          author: 'Arbis Robeli',
          rating: 5,
          text: 'Top Reinigung mit sehr viel Liebe und können. Empfehle ich jedem weiter. Lohnt sich 😊',
          time: 'vor 3 Monaten',
        },
        {
          author: 'Nemeswis s',
          rating: 5,
          text: 'Hat meine wohnung pünktlich wie im Termin abgegeben, und die Abnahme lief perfekt ab. Dazu hin günstiger als die Mitstreiter und sehr sauber gearbeitet.',
          time: 'vor 8 Monaten',
        },
        {
          author: 'Emanuele Di Santo',
          rating: 5,
          text: 'Ich bin mit der Arbeit des Unternehmens sehr zufrieden. Mein Büro hat sein Gesicht verändert.',
          time: 'vor 9 Monaten',
        },
      ],
    };
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}`;
    
    // Für Node.js < 18: Installiere node-fetch: npm install node-fetch
    // import fetch from 'node-fetch';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      const reviews = (data.result.reviews || []).map((review) => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.relative_time_description,
      }));

      return {
        rating: data.result.rating || 5.0,
        reviewCount: data.result.user_ratings_total || 22,
        reviews: reviews.slice(0, 10), // Maximal 10 Reviews
      };
    } else {
      console.error('Google API Fehler:', data.status);
      return await loadCachedReviews();
    }
  } catch (error) {
    console.error('Fehler beim Abrufen der Reviews:', error);
    return await loadCachedReviews();
  }
}

// Cache laden
async function loadCachedReviews() {
  try {
    const data = await fs.readFile(CACHE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Kein Cache gefunden, verwende Fallback-Daten.');
    return {
      rating: 5.0,
      reviewCount: 22,
      reviews: [],
    };
  }
}

// Cache speichern
async function saveCachedReviews(data) {
  try {
    await fs.writeFile(CACHE_FILE, JSON.stringify(data, null, 2));
    console.log('✅ Reviews im Cache gespeichert');
  } catch (error) {
    console.error('Fehler beim Speichern des Caches:', error);
  }
}

// Reviews aktualisieren (wird automatisch jede Woche aufgerufen)
async function updateReviews() {
  console.log('🔄 Aktualisiere Google Reviews...');
  const reviewsData = await fetchGoogleReviews();
  await saveCachedReviews(reviewsData);
  console.log(`✅ Reviews aktualisiert: ${reviewsData.rating} Sterne, ${reviewsData.reviewCount} Bewertungen`);
  return reviewsData;
}

// API Endpoint: Reviews abrufen
app.get('/api/google-reviews', async (req, res) => {
  try {
    const reviewsData = await loadCachedReviews();
    res.json({
      success: true,
      ...reviewsData,
    });
  } catch (error) {
    console.error('Fehler beim Laden der Reviews:', error);
    res.status(500).json({
      success: false,
      error: 'Reviews konnten nicht geladen werden',
    });
  }
});

// API Endpoint: Manuelles Update (optional)
app.post('/api/google-reviews/update', async (req, res) => {
  try {
    const reviewsData = await updateReviews();
    res.json({
      success: true,
      message: 'Reviews erfolgreich aktualisiert',
      ...reviewsData,
    });
  } catch (error) {
    console.error('Fehler beim Update:', error);
    res.status(500).json({
      success: false,
      error: 'Update fehlgeschlagen',
    });
  }
});

// Automatisches Update jede Woche (7 Tage = 604800000 ms)
setInterval(() => {
  updateReviews();
}, 7 * 24 * 60 * 60 * 1000);

// Initiales Update beim Start
updateReviews().then(() => {
  console.log('🚀 Server gestartet. Reviews werden automatisch jede Woche aktualisiert.');
});

app.listen(PORT, () => {
  console.log(`📡 Backend-Server läuft auf Port ${PORT}`);
  console.log(`📊 API Endpoint: http://localhost:${PORT}/api/google-reviews`);
});

