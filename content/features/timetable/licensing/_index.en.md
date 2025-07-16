---
title: "Timetable licensing"
---

At Träwelling, we currently use [Transitous](https://transitous.org/) as our only data source.
Transitous is an open source database that collects and provides timetable data from various transport companies.
Unfortunately, not every transport company has the same license for its data.
We have now implemented most of the common data licenses in order to be able to use the data from Transitous.

In addition, there are some transport companies for which the license is not clear in advance.
In this case, we cannot use the data because we cannot be sure whether the license allows it.

### Active data sources
We currently have a large number of data sources that we can use.
Some of these are licensed via publicly known licenses, others we had to activate manually because no license is specified.
You can find the current list of active data sources here: [https://traewelling.de/debug/motis-sources](https://traewelling.de/debug/motis-sources)

### Currently supported licenses
We currently support the following licenses:

- [IODL-2.0](https://www.dati.gov.it/iodl/2.0) - Italian Open Data License
- [Unlicense](https://spdx.org/licenses/Unlicense.html) - The Unlicense
- [CC-BY-SA-3.0](https://spdx.org/licenses/CC-BY-SA-3.0.html) - Creative Commons Attribution Share Alike 3.0 Unported
- [OGL-ROU-1.0](https://data.gov.ro/base/images/logoinst/OGL-ROU-1.0.pdf) - Open Government License for Romania
- [MIT](https://spdx.org/licenses/MIT.html) - MIT License
- [CC-BY-ND-4.0](https://spdx.org/licenses/CC-BY-ND-4.0.html) - Creative Commons Attribution No Derivatives 4.0 International
- [CC-BY-NC-SA-4.0](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) - Creative Commons Attribution NonCommercial Share Alike 4.0 International
- [OBC-By-1.0](https://spdx.org/licenses/OBC-By-1.0.html) - Open Business Commons Attribution License 1.0
- [OGL-UK-3.0](https://spdx.org/licenses/OGL-UK-3.0.html) - Open Government License v3.0 (UK)
- [NLOD-1.0](https://spdx.org/licenses/NLOD-1.0.html) - Norwegian License for Open Government Data (NLOD) 1.0
- [etalab-2.0](https://spdx.org/licenses/etalab-2.0.html) - Etalab Open License 2.0
- [CC-BY-3.0](https://spdx.org/licenses/CC-BY-3.0.html) - Creative Commons Attribution 3.0 Unported
- [CC-BY-2.5](https://spdx.org/licenses/CC-BY-2.5.html) - Creative Commons Attribution 2.5 Generic
- [CC-BY-1.0](https://spdx.org/licenses/CC-BY-1.0.html) - Creative Commons Attribution 1.0 Generic
- [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html) - Creative Commons Zero v1.0 Universal
- [CC-BY-SA-4.0](https://spdx.org/licenses/CC-BY-SA-4.0.html) - Creative Commons Attribution Share Alike 4.0 International
- [CC-BY-4.0](https://spdx.org/licenses/CC-BY-4.0.html) - Creative Commons Attribution 4.0 International
- [ODbL-1.0](https://spdx.org/licenses/ODbL-1.0.html) - Open Database License (ODbL)

(The list may be incomplete as we are constantly adding new licenses. You can always find the latest version in our [Code](https://github.com/Traewelling/traewelling/blob/develop/app/Models/MotisSourceLicense.php#L28))

### Help us
If you notice that data from a transport company is missing, even though their license allows you to use it, you are welcome to help us.
Simply create an [Issue](https://github.com/Traewelling/traewelling/issues) on GitHub and we will add the data source.

We need the following information so that we can successfully integrate the license:

- Name of the transport company
- Link to the license
- Link to the data (e.g. GTFS feed)
- Link to the data on Transitous (optional, but helpful)
- (If proprietary license:) Excerpt from the license that allows the use of the data

Thank you for your support!