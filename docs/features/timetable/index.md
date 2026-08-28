---
title: "Fahrplandaten"
---

Unsere Fahrplandaten kommen von [Transitous](https://transitous.org/).
Das ist ein Gemeinschaftsprojekt, das offen lizenzierte Fahrpläne von Verkehrsunternehmen aus vielen Ländern sammelt
und über eine gemeinsame Schnittstelle bereitstellt.
Von dort holen wir Haltestellen und Abfahrten.
Angezeigt werden sie, sobald die Lizenz der zugehörigen Daten bekannt ist und uns die Nutzung erlaubt.
Deshalb ist die Abdeckung nicht überall gleich gut.

### Warum fehlt meine Fahrt?

Dafür gibt es meistens einen dieser Gründe:

- **Der Fahrplan fehlt bei Transitous.** Was dort nicht ankommt, können auch wir nicht anzeigen. Nachschauen kannst du
  unter [api.transitous.org](https://api.transitous.org).
- **Die Lizenz der Daten ist noch ungeprüft.** Das bedeutet schlicht, dass sich noch niemand angeschaut hat, unter
  welcher Lizenz das Verkehrsunternehmen seine Fahrplandaten veröffentlicht.
- **Die Lizenz erlaubt uns die Nutzung nicht.** Dann dürfen wir die Fahrten nicht anzeigen.

In beiden Lizenzfällen kannst du unter
[traewelling.de/debug/motis-sources](https://traewelling.de/debug/motis-sources) nachsehen, welche Datenquellen wir
mit welcher Lizenz nutzen.

An manchen Stationen siehst du deshalb einen Hinweis, dass Abfahrten aufgrund unbekannter oder unpassender
Lizenzbestimmungen ausgeblendet wurden.
Dahinter steckt meistens kein Verbot, sondern nur eine Lizenz, die noch niemand geprüft und bei uns aktiviert hat.
Wie du dabei helfen kannst, steht unter [Fahrplanlizenzierung](licensing/index.md).

### Was du tun kannst

- Deine [Fahrt manuell erstellen](../manual-trips/index.md). Das geht immer, auch wenn die Verbindung bei uns fehlt.
  Fehlt dabei eine Station, kannst du sie
  [aus Wikidata importieren](../manual-trips/index.md#neue-stationen-hinzufügen-wikidata-import).
- Uns bei einer fehlenden Lizenz helfen, siehe [Fahrplanlizenzierung](licensing/index.md).
- Bei Transitous einen Fahrplan ergänzen oder aktualisieren, siehe [Transitous](transitous/index.md).

Wie Transitous funktioniert, was Träwelling davon nutzt und warum wir 2025 dorthin gewechselt sind, steht unter
[Transitous](transitous/index.md).
