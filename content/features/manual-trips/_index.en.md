---
title: "Create trip manually"
---

{{< notice important >}}
Please only create journeys here whose category appears in the ‘Category’ selection field.
Manual journeys in private cars, bicycles, on foot, etc. are not intended and will be deleted from time to time.
More information in the [Community guidelines](/guidelines/).
{{</ notice >}}

It can happen that journeys are not available via the interface used by Träwelling and therefore cannot be checked in.
It is therefore possible to create a journey manually.

## How to create a manual trip
At the end of the departure board you will find the ‘Create journey’ button.
Click on it to create a new manual journey.

{{< figure src="button-en.png" alt="Create trip manually" >}}

Enter the name of the station where you want to get on or off.
You will be shown suggestions that you can select.
If you cannot find a stop, you can also enter the ID of the stop from Wikidata (see below).

You can add as many stops as you like as intermediate stops.
An arrival and departure time is required.

Enter the line you are using.

You can leave the ‘Number’ field blank.
If your journey has an (internal) journey number, you can enter it here.

In the ‘Category’ field, you must select the category of your means of transport.

{{< figure src="filled-out.png" alt="Create trip manually" >}}

## Add new stations (Wikidata Import)

The stop search only displays stops that either exist in our database or are known in our backend used for timetable data.
You can therefore also import new stops from Wikidata.
Simply search for the station in Wikidata and copy the ID into the search field.

{{< notice info >}}
The import feature is not yet ready.
Not all types of stations can be imported yet.
If nothing happens, the station is not compatible.
If you find a bug, please write in the GitHub repo or add the category yourself via a pull request.
{{</ notice >}}

{{< figure src="form-wikidata.png" alt="Import station from Wikidata" >}}

