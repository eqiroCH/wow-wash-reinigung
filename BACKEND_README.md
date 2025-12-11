# Backend-Service für Google Reviews

## Einrichtung

1. **Dependencies installieren:**
```bash
npm install
```

2. **Optional: Google Places API Key einrichten**
   - Erstelle einen Google Cloud Account
   - Aktiviere die "Places API"
   - Erstelle einen API Key
   - Füge ihn in eine `.env` Datei ein:
   ```
   GOOGLE_PLACES_API_KEY=dein_api_key_hier
   ```

3. **Backend starten:**
```bash
npm run server
```

Das Backend läuft dann auf `http://localhost:3001`

## Funktionsweise

- **Automatisches Update:** Die Reviews werden **automatisch jede Woche** aktualisiert
- **API Endpoint:** `GET /api/google-reviews` - Gibt die aktuellen Reviews zurück
- **Manuelles Update:** `POST /api/google-reviews/update` - Aktualisiert die Reviews sofort

## Ohne Google API Key

Falls kein API Key vorhanden ist, verwendet das Backend Fallback-Daten. 
Die Bewertungen werden dann nicht automatisch aktualisiert, aber das Widget funktioniert trotzdem.

## Produktion

In Produktion solltest du:
- Den Backend-Service auf einem Server hosten (z.B. Heroku, Railway, Vercel)
- Die `.env` Datei mit dem API Key sicher speichern
- CORS richtig konfigurieren für deine Domain

