---
title: "Fahrplandaten"
---

Bei Träwelling nutzen wir derzeit als einzige Datenquelle eine
[HAFAS](https://de.wikipedia.org/wiki/HAFAS)-Schnittstelle zur Deutschen Bahn.
Wir greifen über [DB-Rest](https://github.com/derhuerst/db-rest) darauf zu.
Ganz grob kann man also sagen, dass wir alle Fahrten kennen "die du im DB-Navigator findest"
(auch, wenn das seit der Einführung des Next DB Navigator und der Umstellung der dort genutzten API nicht mehr so ganz
stimmt).

Wenn du in eine Fahrt einchecken willst, die wir über die HAFAS-Schnittstelle nicht finden, kannst du
die [Fahrt auch manuell erstellen](/features/manual-trips).

#### Aussichten

DB-HAFAS als Datenquelle ist schon sehr gut, da hier viele Verbindungen in Deutschland und Europa abgedeckt sind, welche
dem [EFZ](https://de.wikipedia.org/wiki/Europ%C3%A4isches_Fahrplanzentrum) bekannt sind.
Um mehr Verbindungen und Länder abzudecken, möchten wir gerne auf mehrere Datenquellen zugreifen, jedoch fehlt uns
hierfür die Kapazität, um das zu entwickeln.

Neben der Anbindung weiteren HAFAS Systemen anderer Länder und diversen deutschen EFA- und TRIAS-Systemen wäre auch die
Nutzung von Daten aus [OpenStreetMap](https://www.openstreetmap.org/) und
[Wikidata](https://www.wikidata.org/wiki/Q688541) für detailliertere Informationen zu Haltestellen und Routen denkbar.

Wenn du uns dabei helfen möchtest, freuen wir uns über deine Unterstützung.