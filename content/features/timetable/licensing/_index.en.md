---
title: "Timetable licensing"
weight: 20
---

At Träwelling, we currently use [Transitous](https://transitous.org/) as our only data source.
Transitous is an open source database that collects and provides timetable data from various transport companies.
Unfortunately, not every transport company has the same license for its data.

For most timetables, Transitous also keeps track of the license the data is published under.
You can look this up in the project's [feeds directory](https://github.com/public-transport/transitous/tree/main/feeds).
If a license is recorded there and it is compatible with our use, we show the journeys.
If the information is missing, we cannot use the data, because we cannot be sure whether the license allows it.

So if a license is missing, that is where it should be added: at Transitous.
Every project using the data benefits from it, not just us.

Proprietary licenses are the exception: so far Transitous can only express licenses with an SPDX identifier such as
`CC-BY-4.0`, a license text entirely of its own cannot be recorded there yet.
Only for those cases do we keep a [repository of our own](https://github.com/Traewelling/transitous-licenses/) as a
stopgap, which we would happily get rid of as soon as Transitous can do it itself.

### Active data sources
We currently have a large number of data sources that we can use.
Some of these are licensed via publicly known licenses, others we had to activate manually because no license is specified.
You can find the current list of active data sources at
[traewelling.de/debug/motis-sources](https://traewelling.de/debug/motis-sources).
