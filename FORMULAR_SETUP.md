# Kontaktformular einrichten (für WOW WASH / Kunde)

Damit Anfragen aus dem Kontaktformular direkt an **info@wowwash.ch** gehen, wird **Web3Forms** genutzt. Der Kunde muss einmal einen kostenlosen Zugangsschlüssel holen – danach funktioniert alles automatisch.

---

## Anleitung für den Kunden (info@wowwash.ch)

### Schritt 1: Zugangsschlüssel holen

1. Öffne im Browser: **https://web3forms.com**
2. Scrolle etwas nach unten bis zum Feld **„Get your Access Key“**.
3. Gib dort deine E-Mail-Adresse ein: **info@wowwash.ch**
4. Klicke auf **„Create Access Key“** (oder ähnlich).
5. Prüfe den Posteingang von **info@wowwash.ch** – du bekommst eine E-Mail von Web3Forms mit einem **Access Key** (langer Text, z. B. `a1b2c3d4-e5f6-...`).
6. Kopiere diesen Access Key (Strg+C / Cmd+C).

### Schritt 2: Zugangsschlüssel an den Entwickler geben

Schick den kopierten Access Key deinem Entwickler (z. B. per E-Mail oder Nachricht). Er wird ihn in die Website einbauen. **Nicht** im Chat oder öffentlich posten – nur an vertrauenswürdige Person senden.

---

## Anleitung für den Entwickler

### Schritt 1: Access Key eintragen

1. Im Projektordner eine Datei namens **`.env`** anlegen (falls noch nicht vorhanden).
2. In die Datei **`.env`** genau diese Zeile eintragen (Access Key vom Kunden einsetzen):

   ```
   VITE_WEB3FORMS_ACCESS_KEY=DEIN_ACCESS_KEY_HIER
   ```

   Beispiel (mit echtem Key):

   ```
   VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```

3. Die Datei **`.env`** **nicht** ins Git committen (steht bereits in `.gitignore`).

### Schritt 2: Website neu starten / neu bauen

- **Lokal:** Entwicklungsserver stoppen (Strg+C) und wieder starten: `npm run dev`
- **Deploy:** Nach dem Eintragen des Keys die Seite neu bauen (`npm run build`) und neu deployen. Beim Hosting (z. B. Netlify, Vercel) die Umgebungsvariable `VITE_WEB3FORMS_ACCESS_KEY` mit dem gleichen Wert setzen.

### Schritt 3: Test

1. Auf der Website zum Kontaktformular gehen.
2. Testnachricht mit Name, E-Mail und Nachricht senden.
3. Prüfen, ob unter **info@wowwash.ch** eine E-Mail mit der Anfrage ankommt.

---

## Kurzüberblick

| Was | Details |
|-----|--------|
| **E-Mail des Kunden** | info@wowwash.ch |
| **Dienst** | Web3Forms (kostenlos, E-Mails landen direkt in diesem Postfach) |
| **Umgebungsvariable** | `VITE_WEB3FORMS_ACCESS_KEY` |
| **Ohne Key** | Formular zeigt eine Hinweismeldung; Nutzer werden gebeten, direkt zu mailen oder anzurufen. |

---

## Alternative: Formspree

Falls du lieber **Formspree** nutzen willst:

1. Auf **https://formspree.io** gehen und Account anlegen.
2. Neues Formular erstellen und als Empfänger **info@wowwash.ch** eintragen.
3. Die Form-ID (z. B. `xwpkvpqr`) aus der Formspree-URL kopieren.
4. Im Code in `Contact.jsx` die Formspree-URL wieder verwenden und die alte Form-ID durch die neue ersetzen (oder eine Umgebungsvariable dafür nutzen).

Mit Web3Forms reicht ein Access Key pro E-Mail-Adresse; mit Formspree hast du pro Formular eine Form-ID. Beide leiten die Anfragen zuverlässig an info@wowwash.ch weiter.
