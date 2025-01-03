---
title: "Reise manuell erstellen"
downloadBtn: false
date: 2024-07-12
---

{{< notice important >}}
Manuelle Reisen sind derzeit noch in einem frühen Beta-Stadium. Es kann zu Fehlern und Datenverlust kommen.
Die Funktion wird in Zukunft verbessert und erweitert.
{{</ notice >}}

Träwelling nutzt überwiegend Fahrplandaten aus Deutschland. Hierbei kann es vorkommen, dass nicht alle Verbindungen
oder Züge in der Datenbank vorhanden sind. Vor allem in Ländern außerhalb Deutschlands kann es zu Lücken kommen.
Daher gibt es die Möglichkeit, manuell eine Reise zu erstellen.

{{< notice info >}}
Um manuelle Reisen nutzen zu können, musst du Experimentelle Features in den Einstellungen aktivieren.
{{</ notice >}}

## Der Weg zur manuellen Reise
Am Ende der Abfahrtstafel findest du den Button "Fahrt erstellen". Klicke darauf, um eine neue manuelle Reise zu erstellen.

{{< figure src="button-de.png" alt="Manuelle Reise erstellen" >}}

## Manuelle Reise erstellen
Gib den Namen der Station ein, an der du ein- oder aussteigen möchtest. Es werden dir Vorschläge angezeigt, die du auswählen kannst.

Füge die gewünschten Stationen hinzu, welche als Zwischenhalte.

Trage die Uhrzeiten ein, wann dein Fahrzeug an den Stationen abfährt oder ankommt.

Trage die Linie ein, die du benutzt.

Das Feld "Nummer" kannst du frei lassen. Sollte deine Fahrt eine (interne) Fahrtennummer, kannst du diese hier eintragen.

Im Feld "Kategorie" musst du die Kategorie deines Verkehrsmittels auswählen.


{{< figure src="filled-out.png" alt="Manuelle Reise erstellen" >}}

## Neue Stationen hinzufügen

Bei der Haltestellensuche werden nur Haltestellen angezeigt, die entweder in unserer Datenbank vorhanden oder im HAFAS der Deutschen Bahn bekannt sind.
Das ist vor allem bei Fahrten ins Ausland ein Problem, da dort viele Stationen nicht bekannt sind.
Du kannst daher auch neue Stationen aus Wikidata importieren.
Suche einfach die Station in Wikidata und kopiere die ID in das Suchfeld.

{{< notice info >}}
Das Import-Feature ist noch nicht fertig. Es können noch nicht alle Arten von Stationen importiert werden.
Wenn nichts passiert, ist die Station nicht kompatibel.
Wenn du einen Fehler findest, schreibe bitte im GitHub-Repo oder füge die Kategorie selbst über einen Pull-Request hinzu.
{{</ notice >}}

{{< figure src="form-wikidata.png" alt="Station von Wikidata importieren" >}}

## Info

{{< notice important >}}
Bitte lege hier nur Fahrten an, deren Kategorie im Auswahlfeld "Kategorie" vorkommt.
Manuelle Reisen in privaten KfZ, Fahrrädern, zu Fuß, etc. sind nicht vorgesehen und werden von Zeit zu Zeit gelöscht.
Mehr Infos in den [Regeln](/rules/#manuelle-fahrten)
{{</ notice >}}
