---
title: "Transitous"
---

Transitous is a free, open routing service for public transport.
It is operated by a community and acts independently of transport operators.

### What makes Transitous special?

- **Borderless route planning**:
  Transitous takes timetable data from different countries into account and thus enables seamless planning across
  national borders.

- **Open data**:
  Transitous uses publicly available timetable data (e.g. GTFS and GTFS-RT) and relies on free software such as the
  MOTIS routing engine.

- **Community project**:
  The platform is maintained by volunteers who collect and update regional timetable data.

### How does Träwelling use Transitous?

Träwelling uses the existing interfaces for station and departure data.
The routing data is not used.

As Transitous is a community project that aggregates data from transport operators, it is possible that not all stops
and lines are available.

You can help by taking part in the community and adding or updating timetables, for example.

### Why did we migrate to Transitous?

Until January 2025, we accessed timetable data via a HAFAS interface from Deutsche Bahn.
It was shut down for good in January 2025 along with the DB Business Navigator.
As a result, checking in was not possible for almost a week.

We then integrated an alternative interface from bahn.de at short notice to restore functionality.
That interface was never meant for external projects, however, and is correspondingly unstable.
In April 2025 we suddenly only received the error "Access Denied", our servers could no longer retrieve any timetable
data.

This is only an assumption, but we expect that our IP address was blocked by Deutsche Bahn.
Since we depend on a stable and open data source, migrating to Transitous was the next logical step.

### Further information

Website: [transitous.org](https://transitous.org/)

Source code: [GitHub, public-transport/transitous](https://github.com/public-transport/transitous)
