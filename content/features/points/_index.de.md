---
title: "Punkte"
---

Bei Träwelling erhältst du für jeden Check-in (mit Ausnahmen) eine bestimmte Anzahl von Punkten.
Die Punkte dienen ausschließlich der [Gamification](https://de.wikipedia.org/wiki/Gamification) von Träwelling und haben
keinen weiteren Nutzen.

#### Warum verschwinden meine Punkte?

In den Benutzerprofilen werden neben den insgesamt gefahrenen Kilometern und der eingecheckten Zeit auch die Punkte der
letzten 7 Tage angezeigt.
Die Punkte sind also eine rollende Summe, so dass nach 7 Tagen ohne Check-in 0 Punkte angezeigt werden.

#### Wann bekomme ich wie viele Punkte?

Die vollen Punkte bekommst Du nur, wenn Du während Deiner Reise oder bis zu 60 Minuten vor der Live-Abfahrt eincheckst.
Wenn Du früher oder später eincheckst, bekommst Du die vollen Kilometer und Stunden gutgeschrieben, aber nur einen
Mitleidspunkt.
{{<notice warning>}}
Bei Verspätungen verschiebt sich der Zeitraum entsprechend den tatsächlichen Daten, die wir aus dem Fahrplan erhalten.
Da diese Daten nicht immer korrekt sind, können wir dir hier keine volle Punktegutschrift garantieren.
Wir empfehlen dir daher, möglichst vor der Abfahrt einzuchecken.
{{</ notice>}}

#### Wie werden Punkte berechnet?

Die Punkte setzen sich aus der Produktklasse und der Entfernung deiner Reise zusammen.

Die Entfernung wird auf die nächsten 10 km gerundet und dann durch 10 geteilt. Anschließend werden die Basispunkte
addiert.
Eine Reise mit einem schnellen Fernverkehrszug von 143 km bringt dir also `10 + aufrunden(143/10) = 10 + 15 = 25` Punkte, 
für eine Busfahrt von 8 km gibt es `2 + aufrunden(8/10) = 2 + 1 = 3` Punkte.

Technisch wird in folgenden Kategorien unterschieden:

- **Nationalexpress**: 10 Basispunkte
- **National**: 8 Basispunkte
- **Regionalexpress**: 8 Basispunkte
- **Regional**: 6 Basispunkte
- **Suburban**: 3 Basispunkte
- **Ferry**: 3 Basispunkte
- **Subway**: 2 Basispunkte
- **Bus**: 2 Basispunkte
- **Tram**: 2 Basispunkte
- **Taxi**: 1 Basispunkt

{{% notice info %}}
Für [manuell erstelle Fahrten](/features/manual-trips) erhältst du keine Punkte.
{{% /notice %}}
