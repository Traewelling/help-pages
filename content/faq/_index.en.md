---
title: "F.A.Q."
description: "Häufig gestellte Fragen"
draft: false
---
{{< faq "About Träwelling" >}}
Träwelling is a free check-in service that lets you tell your friends where you are and where you can log your public transit journeys.
In short, you can check into trains and get points for it.
{{</ faq >}}

{{< faq "Wer entwickelt Träwelling?" >}}
Träwelling is an open source project.
Since 2013, various people have been developing the project.
Partly only bugfixes, partly major changes.
On [GitHub](https://github.com/Traewelling/traewelling/graphs/contributors) you can view a list of contributors to the code.
Additionally, a few people have assisted with the alpha version.
You can find them [hier](https://traewelling.de/humans.txt). 
{{</ faq >}}
{{< faq "I would like to contribute to Träwelling! " >}}
Träwelling is an open source project and everyone can contribute. You can find all the information about it on our GitHub page. We are happy about every contribution - simply create a PullRequest! You can either work on your own ideas or pick a task from our Issues on GitHub. If you have any questions, feel free to contact us on our discord server: https://discord.gg/QypAnG2qAw
{{</ faq >}}
{{< faq "Where does the name come from?" >}}
The name is an allusion to the well-known "*Senk ju for träwelling wis Deutsche Bahn*", which you should have heard in almost every long-distance train of the Deutsche Bahn.
{{</ faq >}}
{{< faq "What are events? " >}}
Träwelling brings people together who use the same public transport. Sometimes those people even ride to the same events, without knowing from another!

That’s why we’ve created the Events feature. Anyone [can suggest an event](https://traewelling.de/events/suggest) n a specific time frame; and once accepted, all users can connect their check-ins to that event.

If you want to create an event, please make sure that events should benefit the entire Träwelling community.
Those events can be from the European railway community such as [the last course of a train model](https://traewelling.de/statuses/event/letzte_fahrt_des_met), hacking events such as [GPN](https://traewelling.de/statuses/event/gpn20), or from the LGBTQ scene such as [Cologne Pride](https://traewelling.de/statuses/event/csd_koln_2022).

Events are something special. That’s why we decided to deny suggestions to smaller, local events such as Christmas Markets or city fairs. As always, there are exceptions to that rule.
{{</ faq >}}
{{< faq "Why don't I receive a confirmation email? " >}}
First of all, please check if the email is in the spam folder. If the email is not in the spam folder, please add 'gertrud@traewelling.de' to your contacts and request the email again. If the email still does not arrive, please contact us via our contact form.

{{<notice info>}}
Please note that in the past there were often problems with Microsoft addresses (e.g. Live, Outlook, Hotmail, ...). In this case, please try an e-mail with another provider first.
{{</ notice>}}
{{</ faq >}}

{{< faq "Why isn't my train listed?" >}}
We use an interface of the Deutsche Bahn, where not all offers are displayed directly. Unfortunately, we can't do much with it if your train is not there.
{{</ faq >}}

{{< faq "How are points calculated?" >}}
The points consist of the product class and the distance of your journey.

| product category      | Base points |
|-----------------------|-------------|
| Express (ICE, ...)    | 10          |
| Express (IC, EC, ...) | 10          |
| Regional Express      | 6           |
| Local                 | 5           |
| Suburban              | 3           |
| Bus                   | 2           |
| Ferry                 | 3           |
| Subway                | 2           |
| Tram                  | 2           |
| Taxi                  | 1           |


The distance is rounded to the nearest 10km and then divided by 10. Afterwards the base points are added.
An ICE journey of 143 km thus earns you `10 + round up(143/10) = 10 + 15 = 25` points, for an S-Bahn journey of 8 km you get `2 + round up(8/10) = 2 + 1 = 3` points.
We want you to check in as soon as possible so that the platform always has an up-to-date status of your journeys.
Therefore, you will only receive full points if you check in during your journey or 20min before live departure (scheduled departure + delay).
If you check in 1h before or after the travel period, you can still get 1/4 of the points.
If you check in earlier or later on a connection, you will receive the full kilometres and hours, but only one pity point.

{{<notice info>}}
If your connection is delayed you should make sure to check in before the real departure time, as we cannot get real-time information about the trip after the real departure time.
{{</ notice>}}
{{</ faq >}}
