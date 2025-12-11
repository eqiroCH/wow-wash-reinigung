import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ExternalLink } from 'lucide-react';
import './GoogleReviewsWidget.css';

const GoogleReviewsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5.0);
  const [reviewCount, setReviewCount] = useState(22);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Google Place ID: 0x4b1312d20d878959:0x34d4a23c386c3ec9
  // Google Business URL
  const googleBusinessUrl = 'https://www.google.com/maps/place/Wow+Wash+Reinigung+%7C+Al+kinani+Reinigung/@47.2970504,8.5877372,11z/data=!3m1!4b1!4m6!3m5!1s0x4b1312d20d878959:0x34d4a23c386c3ec9!8m2!3d47.2970504!4d8.5877372!16s%2Fg%2F11w__7w2k_?entry=ttu';
  
  // Google Place ID für API (falls du Google Places API verwendest)
  const placeId = 'ChIJ...'; // Hier müsstest du die richtige ChIJ Place ID eintragen

  useEffect(() => {
    // Funktion zum Laden der Reviews
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // OPTION 1: Google Places API (benötigt API Key)
        // Uncomment und füge deinen API Key hinzu:
        /*
        const apiKey = 'DEIN_GOOGLE_PLACES_API_KEY';
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`
        );
        const data = await response.json();
        
        if (data.result) {
          setRating(data.result.rating || 5.0);
          setReviewCount(data.result.user_ratings_total || 22);
          setReviews(data.result.reviews || []);
        }
        */

        // OPTION 2: Elfsight API (falls verfügbar)
        // Uncomment und füge deine Elfsight Widget ID hinzu:
        /*
        const elfsightWidgetId = 'DEIN_ELFSIGHT_WIDGET_ID';
        const response = await fetch(
          `https://apps.elfsight.com/api/v1/widgets/${elfsightWidgetId}/reviews`
        );
        const data = await response.json();
        
        if (data.reviews) {
          const avgRating = data.reviews.reduce((sum, r) => sum + r.rating, 0) / data.reviews.length;
          setRating(avgRating);
          setReviewCount(data.reviews.length);
          setReviews(data.reviews);
        }
        */

        // OPTION 3: Eigener Backend-Endpoint (empfohlen)
        // Erstelle einen Backend-Endpoint, der die Google Reviews cached und regelmäßig aktualisiert
        // Uncomment und füge deine Backend-URL hinzu:
        /*
        const response = await fetch('https://dein-backend.com/api/google-reviews');
        const data = await response.json();
        
        if (data.success) {
          setRating(data.rating);
          setReviewCount(data.reviewCount);
          setReviews(data.reviews);
        }
        */

        // TEMPORÄR: Fallback zu statischen Daten (wird automatisch aktualisiert, wenn API aktiviert ist)
        // Diese Daten werden nur verwendet, wenn keine API konfiguriert ist
        const response = await fetch('/api/google-reviews').catch(() => null);
        
        if (response && response.ok) {
          const data = await response.json();
          setRating(data.rating || 5.0);
          setReviewCount(data.reviewCount || 22);
          setReviews(data.reviews || []);
        } else {
          // Fallback: Statische Daten (nur für Entwicklung)
          setRating(5.0);
          setReviewCount(22);
          setReviews([
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
          ]);
        }
      } catch (err) {
        console.error('Fehler beim Laden der Reviews:', err);
        setError('Bewertungen konnten nicht geladen werden');
        // Fallback zu statischen Daten bei Fehler
        setRating(5.0);
        setReviewCount(22);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();

    // Optional: Automatisches Update alle 30 Minuten
    const interval = setInterval(fetchReviews, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Floating Widget Button */}
      <motion.button
        className="google-reviews-widget-btn"
        onClick={handleOpen}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Google Bewertungen anzeigen"
      >
        <div className="google-g-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        <div className="rating-badge">
          <Star size={16} fill="currentColor" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </motion.button>

      {/* Modal/Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="google-reviews-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />
            <motion.div
              className="google-reviews-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="google-reviews-header">
                <div className="google-reviews-header-content">
                  <div className="google-logo-large">
                    <svg viewBox="0 0 24 24" width="40" height="40">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div className="google-reviews-header-text">
                    <h3>Google Bewertungen</h3>
                    <div className="google-reviews-rating">
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            fill={i < Math.floor(rating) ? '#FFC107' : '#E0E0E0'}
                            color={i < Math.floor(rating) ? '#FFC107' : '#E0E0E0'}
                          />
                        ))}
                      </div>
                      <span className="rating-number">{rating.toFixed(1)}</span>
                      <span className="rating-count">({reviewCount} Bewertungen)</span>
                    </div>
                  </div>
                </div>
                <button
                  className="google-reviews-close"
                  onClick={handleClose}
                  aria-label="Schließen"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="google-reviews-content">
                {isLoading ? (
                  <div className="google-reviews-loading">Lade Bewertungen...</div>
                ) : error ? (
                  <div className="google-reviews-error">{error}</div>
                ) : reviews.length === 0 ? (
                  <div className="google-reviews-empty">Noch keine Bewertungen vorhanden.</div>
                ) : (
                  <>
                    {reviews.map((review, index) => (
                      <div key={index} className="google-review-item">
                        <div className="review-header">
                          <div className="review-author">
                            <div className="review-author-avatar">
                              {review.author?.charAt(0) || '?'}
                            </div>
                            <div>
                              <div className="review-author-name">{review.author || 'Anonym'}</div>
                              <div className="review-time">{review.time || review.relative_time_description || ''}</div>
                            </div>
                          </div>
                          <div className="review-rating">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                fill={i < (review.rating || 5) ? '#FFC107' : '#E0E0E0'}
                                color={i < (review.rating || 5) ? '#FFC107' : '#E0E0E0'}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="review-text">{review.text || review.review_text || ''}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <div className="google-reviews-footer">
                <a
                  href={googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary google-reviews-link"
                >
                  <span>Auf Google bewerten</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default GoogleReviewsWidget;

