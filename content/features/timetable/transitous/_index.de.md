---
title: "Transitous"
weight: 10
---

Transitous ist ein kostenloser, offener Routingdienst für den öffentlichen Verkehr.
Er wird von einer Community betrieben und agiert unabhängig von Verkehrsunternehmen.

### Was macht Transitous besonders?

- **Grenzenlose Routenplanung**:
  Transitous berücksichtigt Fahrplandaten aus verschiedenen Ländern und ermöglicht so eine nahtlose Planung über
  Landesgrenzen hinweg.

- **Offene Datenbasis**:
  Transitous nutzt öffentlich verfügbare Fahrplandaten (z.B. GTFS und GTFS-RT) und setzt auf freie Softwarelösungen wie
  die Routing-Engine MOTIS.

- **Gemeinschaftsprojekt**:
  Die Plattform wird von Freiwilligen gepflegt, die regionale Fahrplandaten zusammentragen und aktualisieren.

### Wie nutzt Träwelling Transitous?

Träwelling nutzt die vorhandenen Schnittstellen für Stations- und Abfahrtsdaten.
Die Routingdaten werden nicht verwendet.

Da Transitous ein Community-Projekt ist, welches die Daten von Verkehrsunternehmen aggregiert,
kann es sein, dass nicht alle Haltestellen und Linien verfügbar sind.

Du kannst helfen, indem du dich an der Community beteiligst und z.B. Fahrpläne hinzufügst oder aktualisierst.

### Warum sind wir zu Transitous gewechselt?

Bis Januar 2025 haben wir bei Träwelling auf Fahrplandaten über eine HAFAS-Schnittstelle der Deutschen Bahn zugegriffen.
Diese wurde jedoch im Januar 2025 im Zuge der Abschaltung des DB Business Navigators endgültig deaktiviert.
In der Folge war das Einchecken für fast eine Woche nicht mehr möglich.

Wir haben daraufhin kurzfristig eine alternative Schnittstelle von bahn.de integriert, um die Funktionalität
wiederherzustellen.
Diese Schnittstelle war jedoch nicht für externe Projekte gedacht und ist entsprechend instabil.
Im April 2025 erhielten wir plötzlich nur noch den Fehler „Access Denied“, unsere Server konnten keine Fahrplandaten
mehr abrufen.

Zwar ist dies nur eine Vermutung, aber wir gehen davon aus, dass unsere IP-Adresse von der Deutschen Bahn gesperrt wurde.
Da wir auf eine stabile und offene Datenquelle angewiesen sind, war die Migration zu Transitous der nächste logische
Schritt.

### Weitere Informationen

Webseite: [transitous.org](https://transitous.org/)

Quellcode: [GitHub, public-transport/transitous](https://github.com/public-transport/transitous)
