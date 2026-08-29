---
title: "Fahrplanlizenzierung"
---

Bei Träwelling nutzen wir derzeit als einzige Datenquelle [Transitous](https://transitous.org/).
Transitous ist eine Open-Source-Datenbank, die Fahrplandaten von verschiedenen Verkehrsunternehmen sammelt und bereitstellt.
Leider hat nicht jedes Verkehrsunternehmen dieselbe Lizenz für seine Daten.

Zu jedem Fahrplan wird bei Transitous meist auch die Lizenz mitgepflegt, unter der die Daten stehen.
Nachsehen kannst du das im [feeds-Verzeichnis](https://github.com/public-transport/transitous/tree/main/feeds) des
Projekts.
Ist dort eine Lizenz hinterlegt und mit unserer Nutzung vereinbar, zeigen wir die Fahrten an.
Fehlt die Angabe, können wir die Daten nicht nutzen, da wir nicht sicher sein können, ob die Lizenz es erlaubt.

Fehlt eine Lizenzangabe, gehört sie also bei Transitous ergänzt.
Davon profitieren alle Projekte, die die Daten nutzen, nicht nur wir.

Eine Ausnahme sind proprietäre Lizenzen: Transitous kann bisher nur Lizenzen mit einer SPDX-Kennung wie `CC-BY-4.0`
abbilden, ein komplett eigener Lizenztext lässt sich dort noch nicht hinterlegen.
Nur für diese Fälle führen wir als Notlösung ein eigenes
[Zwischenrepository](https://github.com/Traewelling/transitous-licenses/), das wir gerne wieder loswerden möchten,
sobald Transitous das selbst kann.

### Aktive Datenquellen
Wir haben aktuell eine Vielzahl an Datenquellen, die wir nutzen können.
Teilweise sind diese über öffentlich bekannte Lizenzen lizenziert, teilweise mussten wir diese manuell aktivieren, da keine Lizenz angegeben ist.
Die aktuelle Liste der aktiven Datenquellen findest du unter
[traewelling.de/debug/motis-sources](https://traewelling.de/debug/motis-sources).
