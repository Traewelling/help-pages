---
title: "❓ F.A.Q."
description: "Häufig gestellte Fragen"
type: docs
draft: false
---
| [🐛 Fehler melden](https://github.com/Traewelling/traewelling/issues/new?assignees=&labels=bug%2CTo+Do&template=bug_report.md)
| [➕ Funktion wünschen](https://github.com/Traewelling/traewelling/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=)
| [❓ Zum Support](https://traewelling.de/support) 
| 

{{< faq "🔗 Was ist Träwelling? " >}}
Träwelling ist ein kostenloser Check-in Service, mit dem du deinen Freunden mitteilen kannst, wo du gerade mit öffentlichen Verkehrsmitteln unterwegs bist und Fahrtenbuch führen kannst. Kurz gesagt: Man kann in Züge einchecken und bekommt dafür Punkte.
{{</ faq >}}

{{< faq "🧑‍💻 Wer entwickelt Träwelling?" >}}
Träwelling ist ein Open-Source-Projekt. Seit 2013 entwickeln verschiedene Personen am Projekt.
Teils nur Bugfixes, teils größere Änderungen.
Auf [GitHub](https://github.com/Traewelling/traewelling/graphs/contributors) kannst du dir eine Liste von zum Code Beitragenden ansehen. 
Zusätzlich haben ein paar Personen bei der Alpha-Version unterstützt.
Diese findest du [hier](https://traewelling.de/humans.txt). 
{{</ faq >}}

{{< faq "🛠️ Ich möchte auch an Träwelling mitentwickeln!" >}}
Träwelling ist ein Open Source Projekt und jeder kann mitentwickeln. 
Du findest alle Informationen dazu auf unserer GitHub-Seite. 
Wir freuen uns über jeden Beitrag - erstelle einfach einen PullRequest! 
Du kannst entweder an eigenen Ideen arbeiten oder dir eine Aufgabe aus unseren Issues auf GitHub raussuchen. 
Wenn du Fragen hast, kannst du dich gerne auf unserem Discord-Server an uns wenden: https://discord.gg/QypAnG2qAw
{{</ faq >}}

{{< faq "🤔 Woher kommt der Name?" >}}
Der Name ist eine Anspielung auf das allseits bekannte "*Senk ju for träwelling wis Deutsche Bahn*", was man eigentlich in fast jedem Fernverkehrszug der Deutschen Bahn gehört haben sollte.
{{</ faq >}}

{{< faq "🎉 Was sind Veranstaltungen?" >}}
Träwelling bringt Menschen zusammen, die gemeinsam öffentliche Verkehrsmittel nutzen.
Manchmal fahren sie sogar zu derselben Veranstaltung, ohne voneinander zu wissen!

Deswegen haben wir das Veranstaltungen-Feature integriert.
Jede\*r kann über [unser Formular](https://traewelling.de/events/suggest) eine Veranstaltung für einen bestimmten Zeitraum anlegen und alle Benutzer\*innen von Träwelling können ihre Check-ins dann mit dem Event verknüpfen.

Wenn du ein Event anlegen möchtest, beachte bitte, dass Veranstaltungen einen Mehrwert für die gesamte Community von Träwelling haben sollen.
Dazu gehören Events aus dem Eisenbahnwesen wie bspw. [die letzte Fahrt des Metropolitan](https://traewelling.de/statuses/event/letzte_fahrt_des_met), Events von Hackerspaces (z.B. die [GPN](https://traewelling.de/statuses/event/gpn20)), oder aus der LGBTQ-Szene wie die [Cologne Pride](https://traewelling.de/statuses/event/csd_koln_2022).

Veranstaltungen sollen etwas Besonderes sein. Deswegen haben wir uns entschieden, kleine lokale Veranstaltungen wie Weihnachtsmärkte und Stadtfeste prinzipiell abzulehnen. Ausnahmen bestätigen hierbei die Regel.

Weitere Informationen findest unter [Features > Veranstaltungen](/features/events).
{{</ faq >}}
{{< faq "📭 Warum erhalte ich keine Bestätigungsmail?" >}}
 Bitte schaue als erstes nach, ob die E-Mail im Spamordner liegt. Wenn die E-Mail nicht im Spamordner ist, füge bitte 'gertrud@traewelling.de' zu deinen Kontakten hinzu und fordere die E-Mail erneut an. Sollte die E-Mail weiterhin nicht ankommen, kontaktiere uns bitte über unser Kontaktformular.


{{<notice info>}}
Bitte beachte, dass es in der Vergangenheit öfters zu Problemen bei Microsoft-Adressen (z.B. Live, Outlook, Hotmail, ...) kam. Probiere in dem Fall bitte zunächst eine E-Mail bei einem anderen Anbieter aus.
{{</ notice>}}
{{</ faq >}}

{{< faq "🚂 Warum wird mein Zug nicht aufgelistet? " >}}
Wir verwenden eine Schnittstelle der Deutschen Bahn, bei der nicht alle Angebote direkt dargestellt werden.
Leider können wir da auch nicht viel dran tun, wenn dein Zug nicht dabei ist.
{{</ faq >}}

{{< faq "📊 Wie werden Punkte berechnet?" >}}
Die Punkte setzen sich aus der Produktklasse und der Entfernung deiner Reise zusammen.

| Produktklasse             | Basispunkte |
|---------------------------|-------------|
| Fernverkehr (ICE, ...)    | 10          |
| Fernverkehr (IC, EC, ...) | 10          |
| Regionalexpress           | 6           |
| Regional                  | 5           |
| S-Bahn                    | 3           |
| Bus                       | 2           |
| Fähre                     | 3           |
| U-Bahn                    | 2           |
| Tram                      | 2           |
| Taxi                      | 1           |


Die Entfernung wird auf die nächsten 10 km gerundet und dann durch 10 geteilt. Anschließend werden die Basispunkte addiert.
Eine ICE-Reise von 143 km bringt dir also `10 + aufrunden(143/10) = 10 + 15 = 25` Punkte, für eine S-Bahn-Fahrt von 8 km gibt es `2 + aufrunden(8/10) = 2 + 1 = 3` Punkte.
Wir möchten, dass du möglichst zeitnah eincheckst, damit die Plattform immer einen aktuellen Stand Deiner Reisen hat. Darum gibt es die vollen Punkte nur, wenn Du während Deiner Reise oder 20min vor Live-Abfahrt (Plan-Abfahrt + Verspätung) eincheckst. Wer 1h vor oder nach dem Reisezeitraum eincheckt, bekommt immerhin noch 1/4 der Punkte. Wenn Du noch früher oder später in eine Verbindung eincheckst, bekommst Du die vollen Kilometer und Stunden gutgeschrieben, aber nur einen Mitleidspunkt.

{{<notice info>}}
Wenn deine Verbindung verspätet ist solltest du darauf achten, vor der reellen Abfahrtszeit einzuchecken, da wir nach der reellen Abfahrt keine Echtzeitinformationen über die Fahrt mehr erhalten können.
{{</ notice>}}
{{</ faq >}}
