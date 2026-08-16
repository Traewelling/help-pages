---
title: "Timetable data"
---

Our timetable data comes from [Transitous](https://transitous.org/).
It is a community project that collects openly licensed timetables from transport operators in many countries and
provides them through a single interface.
That is where we get stops and departures from.
We show them as soon as the license of the underlying data is known and allows us to use it.
Coverage is therefore not equally good everywhere.

### Why is my journey missing?

Usually it is one of these reasons:

- **The timetable is missing from Transitous.** What does not arrive there cannot be shown by us either. You can check
  this at [api.transitous.org](https://api.transitous.org).
- **The license of the data has not been checked yet.** This simply means that nobody has looked at the license under
  which the transport operator publishes its timetable data.
- **The license does not allow us to use the data.** In that case we are not allowed to show those journeys.

For both license cases you can look up which data sources we use under which license at
[traewelling.de/debug/motis-sources](https://traewelling.de/debug/motis-sources).

At some stations you will therefore see a note that departures were hidden because of unknown or unsuitable license
terms.
Most of the time this is not a prohibition, but simply a license that nobody has checked and enabled on our side yet.
You can find out how to help with that under [Timetable licensing](/features/timetable/licensing).

### What you can do

- Create your [trip manually](/features/manual-trips). That always works, even if the connection is missing here.
  If a station is missing there, you can
  [import it from Wikidata](/features/manual-trips#add-new-stations-wikidata-import).
- Help us with a missing license, see [Timetable licensing](/features/timetable/licensing).
- Add or update a timetable at Transitous, see [Transitous](/features/timetable/transitous).

How Transitous works, what Träwelling uses from it and why we migrated there in 2025 is described under
[Transitous](/features/timetable/transitous).
