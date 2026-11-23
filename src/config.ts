export const SITE = {
  name: "thuki.wtf",
  url: "https://thuki.wtf",
  title: "thom",
  description: "cantinho do thom na internet (≧◡≦)",
  author: "thom",
  handle: "@thukitrash",
  alternateNames: ["thom", "thuki"],
  lang: "pt-BR",
  locale: "pt_BR",
  languages: ["pt-BR", "en"],
  image: "/og.png",
  imageAlt: "cantinho do thom na internet (≧◡≦)",
  twitter: {
    site: "@thukitrash",
    creator: "@thukitrash",
  },
} as const;

export const THEME = {
  key: "theme",
  colors: {
    light: "#fafafa",
    dark: "#0e0e0d",
  },
} as const;

export const PLAYER = {
  playlist: "/sounds/sounds.json",
  soundsPath: "/sounds/",
  volume: 0.3,
} as const;
