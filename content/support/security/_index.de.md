---
title: "Sicherheitsrelevante Fehler"
weight: 20
---

**TL;DR:** Sicherheitslücken bitte nicht öffentlich melden, sondern per E-Mail an [security@traewelling.de](mailto:security@traewelling.de). Teste möglichst in einer lokalen Installation statt auf traewelling.de. Ein Bug-Bounty-Programm gibt es nicht.

---

Wenn du einen sicherheitsrelevanten Fehler gefunden hast, welcher von anderen ausgenutzt werden könnte, melde ihn bitte
nicht öffentlich.
Stattdessen sende eine E-Mail an [security@traewelling.de](mailto:security@traewelling.de).

### Worum es geht

Gemeint ist die Software Träwelling selbst, also der Code aus dem Repository
[Traewelling/traewelling](https://github.com/Traewelling/traewelling).

Die [Anwendungen von Drittanbietern](/community/list-of-third-party-apps) gehören nicht dazu.
Diese werden von anderen Menschen entwickelt und betrieben, Lücken darin meldest du am besten direkt dort.

### Bitte teste lokal

Träwelling ist Open Source: Du kannst dir den Code jederzeit selbst aufsetzen und dort nach Herzenslust ausprobieren,
was dir einfällt.
Bitte mach das lieber in deiner eigenen Installation als auf traewelling.de, denn dort hängen echte Nutzerdaten dran.

Wenn sich ein Fund nur auf traewelling.de zeigt, halte dich bitte an ein paar Regeln:

- Nutze ausschließlich deinen eigenen Account und deine eigenen Daten.
- Greife nicht auf Accounts oder Daten anderer Menschen zu und lies sie nicht aus.
- Verändere und lösche nichts, was dir nicht gehört.
- Keine Last- oder Überlastungstests.
- Kein Social Engineering gegen das Team oder gegen andere Nutzende.

### Was wir für die Meldung brauchen

- Um welche Stelle geht es? Betroffene URL, Endpoint oder Datei im Repository
- Wie können wir den Fehler nachstellen? Am besten Schritt für Schritt
- Was kann jemand damit anstellen?
- Hast du lokal getestet oder auf traewelling.de? Falls dort: wann und mit welchem Account?

### Was du von uns erwarten kannst

Wir sehen die Mails meist recht schnell und versuchen so bald wie möglich, den Fehler nachzustellen.
Träwelling ist allerdings ein Nebenprojekt: Arbeit, Leben und all die anderen Dinge gehen vor, deshalb kann eine
ausführliche Antwort auch mal etwas dauern.

### Veröffentlichung

Bitte gib uns Zeit, die Lücke zu schließen, bevor du sie öffentlich machst.
Wir sagen dir Bescheid, sobald der Fix ausgerollt ist.

### Kein Bug-Bounty

Bitte beachte: Wir bieten kein Bug-Bounty-Programm an und können keine Prämien, Belohnungen oder Zahlungen für
Meldungen leisten.
Träwelling ist ein Freiwilligenprojekt, unser Budget deckt gerade so die Serverkosten.
Über eine verantwortungsvolle Meldung freuen wir uns trotzdem sehr.
