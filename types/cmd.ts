export type Action = {
  name: string;
  shortcut?: string[];
  keywords?: string;
  href?: string;
  section: "Navigation" | "Socials" | "Themes";
  icon?: JSX.Element;
  subtitle?: string;
  perform?: () => void;
  color?: string;
  iconColor?: string;
};

export const actions: Action[] = [
  {
    name: "Home",
    keywords: "home",
    href: "/",
    section: "Navigation",
    color: "#EC605A",
    iconColor: "#5D0F07",
  },
  {
    name: "Blog",
    keywords: "blog",
    href: "/blog",
    section: "Navigation",
    color: "#F7D358",
    iconColor: "#673D13",
  },
  {
    name: "GitHub",
    keywords: "github",
    perform: () => {
      window.open("https://github.com/cristicretu");
    },
    section: "Socials",
    color: "#61C167",
    iconColor: "#0D2805",
  },
  {
    name: "Twitter",
    keywords: "twitter",
    perform: () => {
      window.open("https://twitter.com/cristicrtu");
    },
    section: "Socials",
    color: "#63C7FA",
    iconColor: "#102E62",
  },
  {
    name: "Light",
    keywords: "light",
    section: "Themes",
    color: "#EC79F9",
    iconColor: "#5C0E63",
  },
  {
    name: "Dark",
    keywords: "dark",
    section: "Themes",
    color: "#EC79F9",
    iconColor: "#5C0E63",
  },
  {
    name: "System",
    keywords: "system",
    section: "Themes",
    color: "#FF7F50",
    iconColor: "#9f3e1b",
  },
];


export const Navigation: Action[] = [
  {
    name: "Home",
    keywords: "home",
    href: "/",
    section: "Navigation",
  },
  {
    name: "Blog",
    keywords: "writing",
    href: "/blog",
    section: "Navigation",
  },
];

export const Socials: Action[] = [
  {
    name: "GitHub",
    keywords: "github",
    perform: () => {
      window.open("https://github.com/beverm2391");
    },
    section: "Socials",
  },
  {
    name: "Twitter",
    keywords: "twitter",
    perform: () => {
      window.open("https://twitter.com/beneverman");
    },
    section: "Socials",
  },
];

export const Themes: Action[] = [
  {
    name: "Light",
    keywords: "light",
    section: "Themes",
  },
  {
    name: "Dark",
    keywords: "dark",
    section: "Themes",
  },
  {
    name: "System",
    keywords: "system",
    section: "Themes",
  },
];
