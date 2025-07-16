---
title: "Fahrplanlizenzierung"
---

Bei Träwelling nutzen wir derzeit als einzige Datenquelle [Transitous](https://transitous.org/).
Transitous ist eine Open-Source-Datenbank, die Fahrplandaten von verschiedenen Verkehrsunternehmen sammelt und bereitstellt.
Leider hat nicht jedes Verkehrsunternehmen dieselbe Lizenz für seine Daten.
Wir haben mittlerweile einen Großteil der gängigen Datenlizenzen implementiert, um die Daten von Transitous nutzen zu können.

Zusätzlich gibt es manche Verkehrsunternehmen, bei welchen die Lizenz im Vorfeld nicht klar ist.
In diesem Fall können wir die Daten nicht nutzen, da wir nicht sicher sein können, ob die Lizenz es erlaubt.

### Aktive Datenquellen
Wir haben aktuell eine Vielzahl an Datenquellen, die wir nutzen können.
Teilweise sind diese über öffentlich bekannte Lizenzen lizenziert, teilweise mussten wir diese manuell aktivieren, da keine Lizenz angegeben ist.
Die aktuelle Liste der aktiven Datenquellen findest du hier: [https://traewelling.de/debug/motis-sources](https://traewelling.de/debug/motis-sources)

### Aktuell unterstützte Lizenzen
Aktuell unterstützen wir die folgenden Lizenzen:

 - [IODL-2.0](https://www.dati.gov.it/iodl/2.0) - Italienische Open Data Lizenz
 - [Unlicense](https://spdx.org/licenses/Unlicense.html) - The Unlicense
 - [CC-BY-SA-3.0](https://spdx.org/licenses/CC-BY-SA-3.0.html) - Creative Commons Attribution Share Alike 3.0 Unported
 - [OGL-ROU-1.0](https://data.gov.ro/base/images/logoinst/OGL-ROU-1.0.pdf) - Open Government License für Rumänien
 - [MIT](https://spdx.org/licenses/MIT.html) - MIT License
 - [CC-BY-ND-4.0](https://spdx.org/licenses/CC-BY-ND-4.0.html) - Creative Commons Attribution No Derivatives 4.0 International
 - [CC-BY-NC-SA-4.0](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) - Creative Commons Attribution NonCommercial Share Alike 4.0 International
 - [OBC-By-1.0](https://spdx.org/licenses/OBC-By-1.0.html) - Open Business Commons Attribution License 1.0
 - [OGL-UK-3.0](https://spdx.org/licenses/OGL-UK-3.0.html) - Open Government License v3.0 (UK)
 - [NLOD-1.0](https://spdx.org/licenses/NLOD-1.0.html) - Norwegian Licence for Open Government Data (NLOD) 1.0
 - [etalab-2.0](https://spdx.org/licenses/etalab-2.0.html) - Etalab Open License 2.0
 - [CC-BY-3.0](https://spdx.org/licenses/CC-BY-3.0.html) - Creative Commons Attribution 3.0 Unported
 - [CC-BY-2.5](https://spdx.org/licenses/CC-BY-2.5.html) - Creative Commons Attribution 2.5 Generic
 - [CC-BY-1.0](https://spdx.org/licenses/CC-BY-1.0.html) - Creative Commons Attribution 1.0 Generic
 - [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html) - Creative Commons Zero v1.0 Universal
 - [CC-BY-SA-4.0](https://spdx.org/licenses/CC-BY-SA-4.0.html) - Creative Commons Attribution Share Alike 4.0 International
 - [CC-BY-4.0](https://spdx.org/licenses/CC-BY-4.0.html) - Creative Commons Attribution 4.0 International
 - [ODbL-1.0](https://spdx.org/licenses/ODbL-1.0.html) - Open Database License (ODbL)

(Die Liste könnte unvollständig sein, da wir ständig neue Lizenzen hinzufügen. Die aktuellste Version findest du immer im [Code](https://github.com/Traewelling/traewelling/blob/develop/app/Models/MotisSourceLicense.php#L28))

### Mithelfen
Falls dir auffällt, dass Daten von einem Verkehrsunternehmen fehlen, obwohl deren Lizenz es erlaubt, diese zu nutzen, kannst du uns gerne helfen.
Erstelle hierfür einfach ein [Issue](https://github.com/Traewelling/traewelling/issues) auf GitHub und wir werden die Datenquelle hinzufügen.

Dass wir die Lizenz erfolgreich einbinden können benötigen wir folgende Informationen:

 - Name des Verkehrsunternehmens
 - Link zur Lizenz
 - Link zu den Daten (z.B. GTFS-Feed)
 - Link zu den Daten auf Transitous (optional, aber hilfreich)
 - (Falls proprietäre Lizenz:) Auszug aus der Lizenz, der die Nutzung der Daten erlaubt

Vielen Dank für deine Unterstützung!
