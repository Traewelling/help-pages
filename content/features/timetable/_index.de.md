---
title: "Fahrplandaten"
---

{{<notice note>}}
**Wir haben am 11.04.2025 die Datenquelle für die Fahrplandaten gewechselt.
Ab sofort beziehen wir die Daten von [Transitous](https://transitous.org/).**
Die Qualität der Daten unterscheidet sich von den vorherigen Datenquellen, es kann also zu einem geänderten
Nutzererlebnis kommen.
Bitte hilf mit, Transitous zu verbessern und bring dich in die Community ein.
Mehr Infos zu Transitous findest du weiter unten auf dieser Seite.

{{</ notice>}}

{{<notice important>}}
Es stehen aktuell nur Fahrplandaten zur Verfügung, die unter einer offenen Lizenz veröffentlicht sind.
Darunter zählen z. B. CC-BY-4.0, CC-BY-SA-4.0, CC0-1.0 und die ODbL-1.0. Wir arbeiten nach und nach daran, mehr Datenquellen
zu aktivieren. In der Anfangsphase werden noch einige Unvollständigkeiten auftreten.
{{</ notice>}}

Bei Träwelling nutzen wir derzeit als einzige Datenquelle [Transitous](https://transitous.org/).
Bis April 2025 wurden die Daten von Schnittstellen der Deutschen Bahn bezogen.

Wenn du in eine Fahrt einchecken willst, die wir über Transitous nicht beziehen können, kannst du
die [Fahrt auch manuell erstellen](/features/manual-trips).

### Warum die Migration zu Transitous?

Bis Januar 2025 haben wir bei Träwelling auf Fahrplandaten über eine HAFAS-Schnittstelle der Deutschen Bahn zugegriffen.
Diese wurde jedoch im Januar 2025 im Zuge der Abschaltung des DB Business Navigators endgültig deaktiviert.
In der Folge war das Einchecken für fast eine Woche nicht mehr möglich.

Wir haben daraufhin kurzfristig eine alternative Schnittstelle von bahn.de integriert, um die Funktionalität wiederherzustellen.
Diese Schnittstelle war jedoch nicht für externe Projekte gedacht und ist entsprechend instabil.
Im April 2025 erhielten wir plötzlich nur noch den Fehler „Access Denied“ - unsere Server konnten keine Fahrplandaten mehr abrufen.

Zwar ist dies nur eine Vermutung, aber wir gehen davon aus, dass unsere IP-Adresse von der Deutschen Bahn gesperrt wurde.
Da wir auf eine stabile und offene Datenquelle angewiesen sind, war die Migration zu Transitous der nächste logische Schritt.

### Was ist Transitous?

Transitous ist ein kostenloser, offener Routingdienst für den öffentlichen Verkehr,
der von einer Community betrieben wird und unabhängig von Verkehrsunternehmen agiert.
Er ermöglicht internationale, grenzüberschreitende Routenplanung.

### Was macht Transitous besonders?

- **Grenzenlose Routenplanung**:
  Transitous berücksichtigt Fahrplandaten aus verschiedenen Ländern und ermöglicht so eine nahtlose Planung über
  Landesgrenzen hinweg.

- **Offene Datenbasis**:
  Transitous nutzt öffentlich verfügbare Fahrplandaten (z. B. GTFS und GTFS-RT) und setzt auf freie Softwarelösungen wie
  die Routing-Engine MOTIS.

- **Gemeinschaftsprojekt**:
  Die Plattform wird von Freiwilligen gepflegt, die regionale Fahrplandaten zusammentragen und aktualisieren.

### Wie nutzt Träwelling Transitous?

Träwelling nutzt die vorhandenen Schnittstellen für Stations- und Abfahrtsdaten.
Die Routingdaten werden nicht verwendet.

Da Transitous ein Community-Projekt ist, welches die Daten von Verkehrsunternehmen aggregiert,
kann es sein, dass nicht alle Haltestellen und Linien verfügbar sind.

Du kannst helfen, indem du dich an der Community beteiligst und z. B. Feeds hinzufügst oder aktualisierst.

Mehr Infos dazu findest du auf der Transitous-Webseite bzw. im GitHub-Repo.

#### Weitere Informationen

Webseite: [transitous.org](https://transitous.org/)

Quellcode: [GitHub – public-transport/transitous](https://github.com/public-transport/transitous)