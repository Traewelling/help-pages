import { defineConfig } from "vitepress";

const socialLinks = [
  { icon: "github", link: "https://github.com/traewelling/help-pages" },
  { icon: "mastodon", link: "https://chaos.social/@traewelling" },
];

const editLinkPattern =
  "https://github.com/traewelling/help-pages/edit/main/docs/:path";

function deSidebar() {
  return [
    { text: "📜 Community-Richtlinien", link: "/guidelines/" },
    {
      text: "🆘 Support",
      link: "/support/",
      collapsed: false,
      items: [
        { text: "Fehler melden", link: "/support/report-bugs/" },
        { text: "Sicherheitsrelevante Fehler", link: "/support/security/" },
        { text: "Funktion wünschen oder Frage stellen", link: "/support/features-and-questions/" },
        { text: "Probleme mit deinem Account", link: "/support/account/" },
      ],
    },

    {
      text: "📄 Features",
      link: "/features/",
      collapsed: false,
      items: [
        { text: "Veranstaltungen", link: "/features/events/" },
        {
          text: "Reise manuell erstellen",
          link: "/features/manual-trips/",
          collapsed: false,
          items: [
            { text: "Stationen aus Wikidata importieren", link: "/features/manual-trips/wikidata/" },
          ],
        },
        { text: "Fahrtverlauf (Karte)", link: "/features/map/" },
        { text: "Punkte", link: "/features/points/" },
        {
          text: "Fahrplandaten",
          link: "/features/timetable/",
          collapsed: false,
          items: [
            { text: "Transitous", link: "/features/timetable/transitous/" },
            { text: "Fahrplanlizenzierung", link: "/features/timetable/licensing/" },
          ],
        },
      ],
    },
    {
      text: "🤳 Sicherheit und Schutz",
      link: "/safety-and-security/",
      collapsed: false,
      items: [
        { text: "Apps", link: "/safety-and-security/apps/" },
        { text: "Löschung des Benutzerkontos", link: "/safety-and-security/privacy/" },
      ],
    },
    {
      text: "🤝 Community",
      link: "/community/",
      collapsed: false,
      items: [
        { text: "Projekte von Drittanbietern", link: "/community/list-of-third-party-apps" },
        { text: "Sticker", link: "/community/sticker/" },
        { text: "Mitentwickeln", link: "/community/contribute/" },
      ],
    },
    {
      text: "💼 Organisation",
      link: "/governance/",

      items: [
        { text: "Corporate Design", link: "/governance/corporate-design/" },
        { text: "Kosten & Infrastruktur", link: "/governance/finance/" },
      ],
    },
  ];
}

function enSidebar() {
  return [
    { text: "📜 Community Guidelines", link: "/en/guidelines/" },
    {
      text: "🆘 Support",
      link: "/en/support/",
      collapsed: false,
      items: [
        { text: "Report a bug", link: "/en/support/report-bugs/" },
        { text: "Security-related bugs", link: "/en/support/security/" },
        { text: "Request a feature or ask a question", link: "/en/support/features-and-questions/" },
        { text: "Problems with your account", link: "/en/support/account/" },
      ],
    },
    {
      text: "📄 Features",
      link: "/en/features/",
      collapsed: false,
      items: [
        { text: "Events", link: "/en/features/events/" },
        {
          text: "Create trip manually",
          link: "/en/features/manual-trips/",
          collapsed: false,
          items: [
            { text: "Importing stations from Wikidata", link: "/en/features/manual-trips/wikidata/" },
          ],
        },
        { text: "Map", link: "/en/features/map/" },
        { text: "Points", link: "/en/features/points/" },
        {
          text: "Timetable data",
          link: "/en/features/timetable/",
          collapsed: false,
          items: [
            { text: "Transitous", link: "/en/features/timetable/transitous/" },
            { text: "Timetable licensing", link: "/en/features/timetable/licensing/" },
          ],
        },
      ],
    },
    {
      text: "🤳 Safety and Security",
      link: "/en/safety-and-security/",
      collapsed: false,
      items: [
        { text: "Apps", link: "/en/safety-and-security/apps/" },
        { text: "Deletion of the user account", link: "/en/safety-and-security/privacy/" },
      ],
    },
    {
      text: "🤝 Community",
      link: "/en/community/",
      collapsed: false,
      items: [
        { text: "Projects by third parties", link: "/en/community/list-of-third-party-apps" },
        { text: "Sticker", link: "/en/community/sticker/" },
        { text: "Contributing", link: "/en/community/contribute/" },
      ],
    },
    {
      text: "💼 Governance",
      link: "/en/governance/",
      collapsed: false,
      items: [
        { text: "Corporate Design", link: "/en/governance/corporate-design/" },
        { text: "Costs & Infrastructure", link: "/en/governance/finance/" },
      ],
    },

  ];
}

export default defineConfig({
  title: "Träwelling Help",
  description: "Träwelling Help. This page is meant to provide help for Träwelling users.",

  cleanUrls: true,
  lastUpdated: true,

  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    logo: "/favicon.svg",
    socialLinks,
    editLink: {
      pattern: editLinkPattern,
      text: "Diese Seite auf GitHub bearbeiten",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Suche",
                buttonAriaLabel: "Suche",
              },
              modal: {
                noResultsText: "Keine Ergebnisse für",
                resetButtonTitle: "Suche zurücksetzen",
                footer: {
                  selectText: "auswählen",
                  navigateText: "navigieren",
                  closeText: "schließen",
                },
              },
            },
          },
        },
      },
    },
  },

  locales: {
    root: {
      label: "Deutsch",
      lang: "de-DE",
      title: "Hilfe | Träwelling",
      description: "Träwelling Hilfe. Diese Seite bietet Hilfe für Nutzer:innen von Träwelling.",
      themeConfig: {
        nav: [
          {
            text: "Träwelling besuchen",
            link: "https://traewelling.de",
            target: "_blank",
            rel: "noopener",
          },
        ],
        sidebar: deSidebar(),
        editLink: {
          pattern: editLinkPattern,
          text: "Diese Seite auf GitHub bearbeiten",
        },
        outline: { label: "Auf dieser Seite" },
        docFooter: { prev: "Vorherige Seite", next: "Nächste Seite" },
        darkModeSwitchLabel: "Erscheinungsbild",
        lastUpdatedText: "Zuletzt aktualisiert",
        sidebarMenuLabel: "Menü",
        returnToTopLabel: "Nach oben",
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "Help | Träwelling",
      description: "Träwelling Help. This page is meant to provide help for Träwelling users.",
      themeConfig: {
        nav: [
          {
            text: "Visit Träwelling",
            link: "https://traewelling.de",
            target: "_blank",
            rel: "noopener",
          },
        ],
        sidebar: enSidebar(),
        editLink: {
          pattern: editLinkPattern,
          text: "Edit this page on GitHub",
        },
      },
    },
  },
});
