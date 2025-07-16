---
title: "Timetable data"
---

{{<notice important>}}
Only timetable data published under an open license is currently available.
We are gradually working on activating more data sources.
There will still be some incompleteness in the initial phase.
For more information about Licensing please visit: [licensing](/en/features/timetable/licensing)
{{</ notice>}}

For Träwelling, we currently use [Transitous](https://transitous.org/) as the only data source.
Up until April 2025, the data was obtained from Deutsche Bahn interfaces.

If you want to check into a journey that we can not obtain via Transitous, you can
create the [trip manually](/en/features/manual-trips).

### Why the migration to Transitous?

Until January 2025, we at Träwelling accessed timetable data via a HAFAS interface from Deutsche Bahn.
However, this was finally deactivated in January 2025 when DB Business Navigator was switched off.
As a result, it was no longer possible to check in for almost a week.

We then integrated an alternative interface from bahn.de at short notice to restore functionality.
However, this interface was not intended for external projects and is therefore unstable.
In April 2025, we suddenly only received the error ‘Access Denied’ - our servers could no longer retrieve timetable data.

Although this is only an assumption, we assume that our IP address was blocked by Deutsche Bahn.
As we rely on a stable and open data source, migrating to Transitous was the next logical step.

### What is Transitous?

Transitous is a free, open routing service for public transportation,
operated by a community and independent of transport companies.
It enables international, cross-border route planning.

### What makes Transitous special?

- **Unlimited route planning**:
  Transitous takes into account timetable data from different countries and thus enables seamless planning across
  across national borders.

- **Open database**:
  Transitous uses publicly available timetable data (e.g. GTFS and GTFS-RT) and relies on free software solutions such as
  the MOTIS routing engine.

- **Community project**:
  The platform is maintained by volunteers who collect and update regional timetable data.

### How does Träwelling use Transitous?

Träwelling uses the existing interfaces for station and departure data.
The routing data is not used.

As Transitous is a community project that aggregates data from transportation companies,
it is possible that not all stops and routes are available.

You can help by participating in the community and adding or updating feeds, for example.

You can find more information on the Transitous website or in the GitHub repo.

#### Weitere Informationen

Webseite: [transitous.org](https://transitous.org/)

Quellcode: [GitHub - public-transport/transitous](https://github.com/public-transport/transitous)