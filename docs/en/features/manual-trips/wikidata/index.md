---
title: "Importing stations from Wikidata"
---

The stop search only shows stops that either exist in our database or are known to the backend we use for timetable
data.
If your station is missing there, you can add it yourself through [Wikidata](https://www.wikidata.org/).

Airports are the typical case: there is hardly any open timetable data for flights, so airports are usually not in our
database. Importing them lets you log flights as well.

Wikidata is a free knowledge base from the Wikipedia family.
Every entry in it has its own number, the so-called Q-ID. It looks like this, for example: `Q46033`.
That number is exactly what we need in order to import the station.

### How to do it

1. Open [wikidata.org](https://www.wikidata.org/) and search for the name of your station in the top right corner,
   for example "Frankfurt Airport".
2. Click the matching result. The description below the name helps you pick the right entry: for Frankfurt Airport it
   says "biggest airport of Germany, located in Frankfurt, Hesse".
3. Read off the Q-ID. It is shown right next to the page name and again at the end of the address bar:
   `wikidata.org/wiki/Q46033`.
4. Enter that Q-ID into the station field on Träwelling, just as you would type a station name.
   The station is then imported and can be selected.

![Import station from Wikidata](/features/manual-trips/wikidata/form-wikidata.png)

If nothing happens during the import, this kind of station cannot be created on our side yet.
[Let us know](../../../support/report-bugs/index.md) and we will have a look at it.
