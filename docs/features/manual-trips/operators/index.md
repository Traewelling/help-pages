---
title: "Betreiber hinzufügen"
---

Im Feld „Betreiber“ einer manuellen Reise kannst du nur Betreiber auswählen, die Träwelling bereits kennt.
Sie stammen aus den Fahrplandaten und aus der Datei `operators.csv` im Repository
[transitous-wikidata-operator-matching](https://github.com/Traewelling/transitous-wikidata-operator-matching).
Fehlt dein Betreiber, kannst du ihn dort ergänzen.

Jeder Betreiber in `operators.csv` braucht einen Eintrag auf [Wikidata](https://www.wikidata.org/) und dessen Q-ID,
zum Beispiel `Q644958` für die Verkehrsbetriebe Karlsruhe.
Wie du eine Q-ID findest, steht unter [Stationen aus Wikidata importieren](../wikidata/index.md).

### So gehst du vor

1. Suche den Betreiber auf Wikidata und notiere die Q-ID.
   Gibt es noch keinen Eintrag, kannst du ihn über
   [Neues Datenobjekt erstellen](https://www.wikidata.org/wiki/Special:NewItem) anlegen.
2. Öffne [`operators.csv`](https://github.com/Traewelling/transitous-wikidata-operator-matching/blob/main/operators.csv)
   auf GitHub und klicke auf das Stiftsymbol („Edit this file“). Dafür brauchst du ein GitHub-Konto.
3. Füge am Ende der Datei eine Zeile mit Q-ID und Name hinzu, getrennt durch ein Komma:
   ```
   Q644958,Verkehrsbetriebe Karlsruhe
   ```
   Der Name wird in Träwelling genau so angezeigt und durchsucht.
   Enthält der Name ein Komma, setze ihn in Anführungszeichen.
4. Klicke auf „Commit changes…“, dann auf „Propose changes“ und zuletzt auf „Create pull request“.

Sobald der Pull Request übernommen wurde, ist der Betreiber innerhalb einer Stunde in Träwelling auswählbar.
