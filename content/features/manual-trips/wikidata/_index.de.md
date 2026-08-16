---
title: "Stationen aus Wikidata importieren"
---

Bei der Haltestellensuche werden nur Haltestellen angezeigt, die entweder in unserer Datenbank vorhanden oder in
unserem genutzten Backend für Fahrplandaten bekannt sind.
Fehlt deine Station dort, kannst du sie über [Wikidata](https://www.wikidata.org/) selbst hinzufügen.

Typischer Fall sind Flughäfen: Zu Flügen gibt es kaum offene Fahrplandaten, entsprechend sind Flughäfen bei uns meist
nicht hinterlegt. Über den Import kannst du sie ergänzen und damit auch Flüge eintragen.

Wikidata ist eine freie Wissensdatenbank aus dem Wikipedia-Umfeld.
Jeder Eintrag darin hat eine eigene Nummer, die sogenannte Q-ID. Sie sieht zum Beispiel so aus: `Q46033`.
Genau diese Nummer brauchen wir, um die Station zu importieren.

### So gehst du vor

1. Öffne [wikidata.org](https://www.wikidata.org/) und suche oben rechts nach dem Namen deiner Station,
   zum Beispiel „Flughafen Frankfurt“.
2. Klicke den passenden Treffer an. Die Beschreibung unter dem Namen hilft dir, den richtigen Eintrag zu erwischen:
   Beim Flughafen Frankfurt steht dort zum Beispiel „größter deutscher Flughafen in Hessen“.
3. Lies die Q-ID ab. Sie steht direkt neben dem Namen der Seite und noch einmal am Ende der Adresszeile:
   `wikidata.org/wiki/Q46033`.
4. Gib diese Q-ID bei Träwelling in das Feld für die Station ein, so wie du sonst einen Stationsnamen eintippen würdest.
   Die Station wird dann importiert und lässt sich auswählen.

{{< figure src="form-wikidata.png" alt="Station von Wikidata importieren" >}}

Wenn beim Import nichts passiert, lässt sich diese Art von Station bei uns noch nicht anlegen.
[Sag uns gerne Bescheid](/support/report-bugs), dann schauen wir uns den Fall an.
