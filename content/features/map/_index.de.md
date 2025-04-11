---
title: "Fahrtverlauf (Karte)"
---

Bei (fast) jeder Fahrt zeigt Träwelling dir eine Karte an, auf der der ungefähre Verlauf deiner Fahrt dargestellt wird.

### Woher stammen die Kartendaten?

Die ursprünglichen Streckenverläufe basieren auf [Fahrplandaten](/features/timetable), die wir für Träwelling nutzen.  
Seit April 2025 verwenden wir [Transitous](/features/timetable) als neues System im Hintergrund.

Aktuell zeigt Träwelling die Strecken **nur von Station zu Station** an. Eine detaillierte Linienführung (z. B. exakte Gleisverläufe) ist momentan noch nicht möglich.

### Genauere Routen mit BRouter

Nach deinem Check-in versucht Träwelling, mit [BRouter](https://brouter.de/brouter-web/) eine genauere Route entlang deiner Stationen zu berechnen.  
Dabei werden bekannte Zwischenhalte berücksichtigt, um eine möglichst realistische Streckenführung zu erzeugen.

Das klappt aber nicht immer perfekt:

- Manchmal liegen die gespeicherten Koordinaten der Haltestellen **nicht direkt an den tatsächlich befahrenen Gleisen**.
- Auf längeren Strecken **ohne bekannte Zwischenhalte** kann BRouter die Route **nicht korrekt berechnen**.
- In **Ballungsräumen mit vielen Bahnarten** (z. B. S-Bahn, Stadtbahn, Fernbahn) kann es zu **Verwechslungen** kommen.

### Beispiel: Routing-Fehler in Hannover

**Du fährst mit der S-Bahn von Hannover Hbf nach Hannover Karl-Wiechert-Allee.**  
Tatsächlich verläuft diese Fahrt komplett auf einer Eisenbahnstrecke.

Allerdings liegt die Haltestelle „Karl-Wiechert-Allee“ sehr nah an einer gleichnamigen Stadtbahnhaltestelle.  
Da BRouter die Koordinaten nicht eindeutig zuordnen kann, **wählt es fälschlicherweise die Stadtbahnroute**.  
Das Ergebnis: Die angezeigte Strecke führt unnötig über Leinhausen, wo ein Übergang zur Stadtbahn möglich wäre – **ein klarer Fehler**.

<img src="error-hannover-hbf-kwa.png">
<small>
    &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>  
    &copy; <a href="https://github.com/abrensch/brouter">BRouter</a>
</small>
