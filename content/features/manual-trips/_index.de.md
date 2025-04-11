---
title: "Reise manuell erstellen"
---

{{< notice important >}}
Bitte lege hier nur Fahrten an, deren Kategorie im Auswahlfeld "Kategorie" vorkommt.
Manuelle Reisen in privaten KfZ, Fahrrädern, zu Fuß, etc. sind nicht vorgesehen und werden von Zeit zu Zeit gelöscht.
Mehr Infos in den [Community-Richtlinien](/guidelines/).
{{</ notice >}}

Es kann passieren, dass Fahrten nicht über die von Träwelling genutzen Auskünfte vorhanden sind und man daher nicht einchecken kann.
Daher gibt es die Möglichkeit, manuell eine Reise zu erstellen.

## Der Weg zur manuellen Reise
Am Ende der Abfahrtstafel findest du den Button "Fahrt erstellen".
Klicke darauf, um eine neue manuelle Reise zu erstellen.

{{< figure src="button-de.png" alt="Manuelle Reise erstellen" >}}

## Manuelle Reise erstellen
Gib den Namen der Station ein, an der du ein- oder aussteigen möchtest.
Es werden dir Vorschläge angezeigt, die du auswählen kannst.
Wenn du eine Station nicht findest, kannst du auch die ID der Station aus Wikidata eingeben (siehe unten).

Du kanns beliebig viele Stationen als Zwischenhalt hinzufügen.
Eine Ankunfts- und Abfahrtszeit ist notwendig.

Trage die Linie ein, die du benutzt.

Das Feld „Nummer“ kannst du frei lassen.
Sollte deine Fahrt eine (interne) Fahrtennummer, kannst du diese hier eintragen.

Im Feld „Kategorie“ musst du die Kategorie deines Verkehrsmittels auswählen.

{{< figure src="filled-out.png" alt="Manuelle Reise erstellen" >}}

## Neue Stationen hinzufügen (Wikidata Import)

Bei der Haltestellensuche werden nur Haltestellen angezeigt, die entweder in unserer Datenbank vorhanden oder in unserem genutzten Backend für Fahrplandaten bekannt sind.
Du kannst daher auch neue Stationen aus Wikidata importieren.
Suche einfach die Station in Wikidata und kopiere die ID in das Suchfeld.

{{< notice info >}}
Das Import-Feature ist noch nicht fertig.
Es können noch nicht alle Arten von Stationen importiert werden.
Wenn nichts passiert, ist die Station nicht kompatibel.
Wenn du einen Fehler findest, schreibe bitte im GitHub-Repo oder füge die Kategorie selbst über einen Pull-Request hinzu.
{{</ notice >}}

{{< figure src="form-wikidata.png" alt="Station von Wikidata importieren" >}}

