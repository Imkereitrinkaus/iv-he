# Imkerverein Herdecke-Ende e.V. – Website

Schlanke, statische Website (HTML, CSS, JavaScript) – ohne CMS, PHP oder Datenbank.

## Termine eintragen

Alle Termine stehen in **[`data/termine.txt`](data/termine.txt)**. Die Anleitung steht oben in der Datei.

```
Datum: 14.03.2027
Titel: Frühjahrsdurchsicht am Bienenstand
Zeit: 10:00 Uhr
Art: Praxis
Ort: Bienenstand Kirchende
```

- Pflicht sind nur **Datum** und **Titel** (ohne Zeit: 19:00 Uhr, ohne Ort: Sportlertreff).
- Der **monatliche Imkertreff** (2. Dienstag, 19 Uhr) erscheint automatisch.
  Nur eintragen, wenn er ein Thema hat oder ausfällt (`Art: Entfällt`).
- Mögliche Arten: Treff, Vortrag, Praxis, Neuimker, Verein, Öffentlich, Entfällt.
- Vergangene Termine verschwinden von selbst.

Auf GitHub: Datei öffnen → Stift-Symbol → ändern → **Commit changes**.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite mit den nächsten Terminen |
| `ueber-uns.html` | Verein, Chronik, Verbände |
| `termine.html` | Imkertreff und alle Termine |
| `mitglied-werden.html` | Vorteile, Ablauf, Mitgliedsantrag |
| `kontakt.html` | Kontaktformular (öffnet das E-Mail-Programm – kein Spam möglich) |
| `impressum.html`, `datenschutz.html` | Rechtliches (Platzhalter noch ausfüllen!) |

## Noch offen

- [ ] Vereins-E-Mail-Adresse in `js/form.js` eintragen (`KONTAKT_ADRESSE`)
- [ ] Platzhalter in Impressum und Datenschutz ausfüllen
- [ ] `mitgliedsantrag.pdf` hinzufügen
- [ ] Titelfoto als `images/hero-bienenstand.jpg` hinzufügen (optional)
- [ ] Vor dem Start: Vorschau-Sperre für Suchmaschinen entfernen

## Veröffentlichen

Siehe **[`HOSTING-CHECKLISTE.md`](HOSTING-CHECKLISTE.md)** – inklusive Hinweisen zur Nextcloud
auf demselben Webspace. Die `.htaccess` enthält die Sicherheitseinstellungen und muss mit hochgeladen werden.
