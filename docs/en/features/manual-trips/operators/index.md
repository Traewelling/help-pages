---
title: "Adding operators"
---

In the "Operator" field of a manual trip you can only select operators that Träwelling already knows.
They come from the timetable data and from the file `operators.csv` in the repository
[transitous-wikidata-operator-matching](https://github.com/Traewelling/transitous-wikidata-operator-matching).
If your operator is missing, you can add it there.

Every operator in `operators.csv` needs an entry on [Wikidata](https://www.wikidata.org/) and its Q-ID,
for example `Q644958` for Verkehrsbetriebe Karlsruhe.
How to find a Q-ID is described in [Importing stations from Wikidata](../wikidata/index.md).

### How to do it

1. Search for the operator on Wikidata and note its Q-ID.
   If there is no entry yet, you can create one via
   [Create a new Item](https://www.wikidata.org/wiki/Special:NewItem).
2. Open [`operators.csv`](https://github.com/Traewelling/transitous-wikidata-operator-matching/blob/main/operators.csv)
   on GitHub and click the pencil icon ("Edit this file"). You need a GitHub account for this.
3. Add a line with the Q-ID and the name at the end of the file, separated by a comma:
   ```
   Q644958,Verkehrsbetriebe Karlsruhe
   ```
   Träwelling shows and searches the name exactly as written.
   If the name contains a comma, put it in quotation marks.
4. Click "Commit changes…", then "Propose changes" and finally "Create pull request".

Once the pull request has been merged, the operator can be selected in Träwelling within one hour.
