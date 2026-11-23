import type { MessageKey } from "@/i18n";

export const LINKS = [
  {
    icon: "simple-icons:x",
    href: "https://x.com/thukitrash",
    labelKey: "links.twitter",
  },
  {
    icon: "simple-icons:instagram",
    href: "https://instagram.com/thukitrash",
    labelKey: "links.instagram",
  },
  {
    icon: "simple-icons:tiktok",
    href: "https://tiktok.com/@thukitrash",
    labelKey: "links.tiktok",
  },
  {
    icon: "simple-icons:spotify",
    href: "https://open.spotify.com/user/317hs76ivw45qyu4bt34uhdfzv4i",
    labelKey: "links.spotify",
  },
  {
    icon: "simple-icons:pinterest",
    href: "https://pinterest.com/thukitrash/",
    labelKey: "links.pinterest",
  },
  {
    icon: "simple-icons:roblox",
    href: "https://www.roblox.com/pt/users/11477824674/profile",
    labelKey: "links.roblox",
  },
  {
    icon: "simple-icons:anilist",
    href: "https://anilist.co/user/thuki/",
    labelKey: "links.anilist",
  },
  {
    icon: "simple-icons:steam",
    href: "https://steamcommunity.com/id/thukitrash/",
    labelKey: "links.steam",
  },
  {
    icon: "simple-icons:github",
    href: "https://github.com/thukitrash/",
    labelKey: "links.github",
  },
] as const satisfies ReadonlyArray<{
  icon: string;
  href: string;
  labelKey: MessageKey;
}>;
