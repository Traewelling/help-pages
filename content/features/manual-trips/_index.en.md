---
title: "Create trip manually"
downloadBtn: false
date: 2024-07-12

---

{{< notice important >}}
Manual trips are currently in an early beta stage. Errors and data loss may occur.
The feature will be improved and expanded in the future.
{{</ notice >}}

Träwelling mainly uses timetable data from Germany. It may happen that not all connections or trains are available in the database.
Especially in countries outside of Germany, there may be gaps.
Therefore, there is the possibility to create a trip manually.

{{< notice info >}}
To use manual trips, you have to enable Experimental Features in the settings.
{{</ notice >}}

## Where to find manual trips
At the end of the departure board you will find the button "Create journey". Click on it to create a new manual trip.

{{< figure src="button-en.png" alt="Create journey" >}}

## Create manual trip
Enter the name of the station where you want to get on or off. Suggestions will be displayed that you can select.

Add the desired stations as intermediate stops.

Enter the times when your vehicle departs or arrives at the stations.

Enter the line you are using.

You can leave the "Number" field blank. If your trip has a (internal) trip number, you can enter it here.

In the "Category" field you have to select the category of your means of transport.


{{< figure src="filled-out.png" alt="Create manual trip" >}}

## Neue Stationen hinzufügen

The stop search only shows stops that are either in our database or known in Deutsche Bahn's HAFAS.
This is a particular problem for journeys abroad, as many stations are not known there.
You can therefore also import new stations from Wikidata.
Simply search for the station in Wikidata and copy the ID into the search field.

{{< notice info >}}
The import feature is not yet ready. Not all types of stations can be imported yet.
If nothing happens, the station is not compatible.
If you think that's wrong, please write in the GitHub repo or add the category yourself via a pull request.
{{</ notice >}}

{{< figure src="form-wikidata.png" alt="Import station from Wikidata" >}}

## Info
{{< notice important >}}
Please only create trips here whose category is included in the selection field "Category".
Manual trips in private motor vehicles, bicycles, on foot, etc. are not provided and will be deleted from time to time.
{{</ notice >}}
