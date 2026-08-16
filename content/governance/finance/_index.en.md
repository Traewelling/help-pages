---
title: "💰 Costs & Infrastructure"
downloadBtn: false
date: 2026-08-16
---

Träwelling is run by the Träwelling Team in their spare time, and the work on it is unpaid.
Servers, backups and domains still cost money, though.
On this page we lay open what we spend our money on.

Since our association was founded in spring 2026, we are able to accept financial contributions towards these costs.
If you would like to help, you can find more information at [traewelling.org/support-us](https://traewelling.org/support-us).
We are especially happy about standing orders, even small ones: they give us planning security for our ongoing costs.
This support is and remains voluntary: Träwelling stays free of charge. Now and always.

### Costs at a glance

| Item                                                              | Provider | Costs per month |
|-------------------------------------------------------------------|----------|----------------:|
| [Hosting server (`maglev`)](#hosting-maglev)                      | netcup   |         16.10 € |
| [Administration server (`leitstelle`)](#administration-leitstelle) | netcup   |         11.94 € |
| [Monitoring server (`aufsicht`)](#monitoring-aufsicht)            | Hetzner  |          5.49 € |
| [Backup storage](#backups)                                        | Hetzner  |          3.81 € |
| [Domains](#domains) (prorated)                                    |          |          5.23 € |
| **Total**                                                         |          |     **42.57 €** |

All amounts are gross amounts, i.e. including VAT.

### Servers

We currently run three virtual servers: two at netcup and one at Hetzner.

#### Hosting (`maglev`)

This server is primarily responsible for hosting traewelling.de and traewelling.org.

Provider: netcup

Costs: 16.10 € per month

We are currently scratching at the server's RAM limit, which also affects database performance.
We would therefore like to expand the resources of the hosting server as soon as the association's regular finances allow it.

#### Administration (`leitstelle`)

The administration server hosts everything needed around Träwelling that is not the app itself:

- **Authentik**: single sign-on for our internal services
- **Zammad**: ticket system for support
- **Paperless-ngx**: document storage for board and association matters
- **Outline**: internal wiki
- **Synapse and Element**: our Matrix chat. Feel free to drop by our space [#space:traewelling.org](https://matrix.to/#/%23space:traewelling.org)
- **GoToSocial**: our future presence in the Fediverse. Not live yet, for now you can find us at [@traewelling@chaos.social](https://chaos.social/@traewelling)

Provider: netcup

Costs: 11.94 € per month

#### Monitoring (`aufsicht`)

Our monitoring server runs Grafana, among other things.

Provider: Hetzner

Costs: 5.49 € per month

A publicly accessible dashboard is planned.

### Backups

We create our backups with [Borg](https://github.com/borgbackup/borg).
They are stored at Hetzner, separate from the servers that run traewelling.de.

Costs: 3.81 € per month

### Domains

| Domain                               | Costs per year |
|--------------------------------------|---------------:|
| traewelling.de                       |         5.00 € |
| träwelling.de (xn--trwelling-w2a.de) |         5.00 € |
| trwl.dev                             |        16.71 € |
| traewelling.org                      |        18.00 € |
| träwelling.org                       |        18.00 € |
| **Total**                            |    **62.71 €** |
