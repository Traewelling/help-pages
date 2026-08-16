---
title: "💰 Kosten & Infrastruktur"
downloadBtn: false
date: 2026-08-16
---

Träwelling wird vom Träwelling Team in der Freizeit betrieben, die Arbeit daran ist unbezahlt.
Server, Backups und Domains kosten aber trotzdem Geld.
Auf dieser Seite legen wir offen, wofür wir wie viel ausgeben.

Seit der Vereinsgründung im Frühjahr 2026 können wir für diese Kosten finanzielle Unterstützung annehmen.
Wenn du uns dabei unterstützen möchtest, findest du auf [traewelling.org/support-us](https://traewelling.org/support-us) weitere Informationen.
Besonders freuen wir uns über Daueraufträge, auch über kleine: Sie geben uns Planungssicherheit für die laufenden Kosten.
Diese Unterstützung ist und bleibt freiwillig: Träwelling bleibt kostenlos. Jetzt und immer.

### Kosten im Überblick

| Position                                                   | Anbieter | Kosten pro Monat |
|------------------------------------------------------------|----------|-----------------:|
| [Hosting-Server (`maglev`)](#hosting-maglev)               | netcup   |          16,10 € |
| [Verwaltungsserver (`leitstelle`)](#verwaltung-leitstelle) | netcup   |          11,94 € |
| [Monitoring-Server (`aufsicht`)](#monitoring-aufsicht)     | Hetzner  |           5,49 € |
| [Backup-Speicher](#backups)                                | Hetzner  |           3,81 € |
| [Domains](#domains) (anteilig)                             |          |           5,23 € |
| **Gesamt**                                                 |          |      **42,57 €** |

Alle Beträge sind Bruttobeträge, also inklusive Mehrwertsteuer.

### Server

Wir betreiben aktuell drei virtuelle Server: zwei bei netcup und einen bei Hetzner.

#### Hosting (`maglev`)

Dieser Server kümmert sich primär um das Hosting von traewelling.de und traewelling.org.

Anbieter: netcup

Kosten: 16,10 € pro Monat

Aktuell kratzen wir ziemlich an der RAM-Grenze. Darunter leidet auch die Performance der Datenbank.
Wir möchten die Ressourcen vom Hostingserver deshalb gerne ausbauen, sobald es die regelmäßigen Finanzen des Vereins ermöglichen.

#### Verwaltung (`leitstelle`)

Der Verwaltungsserver beherbergt alles, was rund um Träwelling gebraucht wird, aber nicht die App selbst ist:

- **Authentik**: Single Sign-on für unsere internen Dienste
- **Zammad**: Ticketsystem für den Support
- **Paperless-ngx**: Dokumentenablage für den Vorstands-Vereins-Kram
- **Outline**: internes Wiki
- **Synapse und Element**: unser Matrix-Chat. Vorbeischauen kannst du in unserem Space [#space:traewelling.org](https://matrix.to/#/%23space:traewelling.org)
- **GoToSocial**: unser künftiger Auftritt im Fediverse. Noch nicht live, aktuell findest du uns unter [@traewelling@chaos.social](https://chaos.social/@traewelling)

Anbieter: netcup

Kosten: 11,94 € pro Monat

#### Monitoring (`aufsicht`)

Auf unserem Monitoring-Server läuft unter anderem Grafana.

Anbieter: Hetzner

Kosten: 5,49 € pro Monat

Ein öffentlich einsehbares Dashboard ist geplant.

### Backups

Unsere Backups erstellen wir mit [Borg](https://github.com/borgbackup/borg).
Sie liegen bei Hetzner und damit getrennt von den Servern, die traewelling.de betreiben.

Kosten: 3,81 € pro Monat

### Domains

| Domain                                | Kosten pro Jahr |
|---------------------------------------|----------------:|
| traewelling.de                        |          5,00 € |
| träwelling.de (xn--trwelling-w2a.de)  |          5,00 € |
| trwl.dev                              |         16,71 € |
| traewelling.org                       |         18,00 € |
| träwelling.org                        |         18,00 € |
| **Gesamt**                            |     **62,71 €** |
