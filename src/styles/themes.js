const themes = {
  light: {
    name: "light",
    background: "#f9f4f1",
    backgroundSecondary: "#ede9e6",
    contrast: "#1b1622",
    black: "#1b1622",
    white: "#ffffff",
    text: "#3b3247",
    textStrong: "#221c2b",
    purple: "#735f85",
    purpleText: "#7f58a1",
    purpleTextStrong: "#6f3999",
    purpleBg: "#e3d8ed",
    blue: "#7292a7",
    blueText: "#466d91",
    blueTextStrong: "#22577d",
    blueBg: "#c7e0f0",
    teal: "#5bc3cf",
    tealText: "#1d757d",
    tealTextStrong: "#175c58",
    tealBg: "#c3e2e3",
    green: "#8bdab2",
    greenText: "#49735d",
    greenTextStrong: "#0e5e45",
    greenBg: "#bee5d2",
    yellow: "#e3df74",
    yellowText: "#7a6a16",
    yellowTextStrong: "#665000",
    yellowBg: "#eaebcd",
    orange: "#f7855f",
    orangeText: "#ab5000",
    orangeTextStrong: "#992b00",
    orangeBg: "#fce0d7",
    red: "#a47074",
    redText: "#a15258",
    redTextStrong: "#853a49",
    redBg: "#ffdbde",
    warning: "#eead2b",
    warningText: "#784800",
    error: "#e1334a",
    errorText: "#a8000e",
    confirm: "#449c6d",
    confirmText: "#075f36",
    callToAction: "#4f0ca1",
  },
  dark: {
    name: "dark",
    background: "#1b1622",
    backgroundSecondary: "#302f3d",
    contrast: "#f9f4f1",
    black: "#0d0014",
    white: "#f9f4f1",
    text: "#d1cdcb",
    textStrong: "#e8e3e1",
    purple: "#614f71",
    purpleText: "#b599cf",
    purpleTextStrong: "#d8b4fa",
    purpleBg: "#3d2c4d",
    blue: "#657f93",
    blueText: "#83a9c9",
    blueTextStrong: "#9dc8ed",
    blueBg: "#243542",
    teal: "#54b1bb",
    tealText: "#59b2ae",
    tealTextStrong: "#4fd6cf",
    tealBg: "#1a3837",
    green: "#83c8a2",
    greenText: "#60b58b",
    greenTextStrong: "#5bd99e",
    greenBg: "#1f382b",
    yellow: "#d4ce6c",
    yellowText: "#b0a84c",
    yellowTextStrong: "#cfc478",
    yellowBg: "#32360e",
    orange: "#de7753",
    orangeText: "#f28864",
    orangeTextStrong: "#ffb08f",
    orangeBg: "#522719",
    red: "#8f6062",
    redText: "#d4969a",
    redTextStrong: "#ffabb9",
    redBg: "#522629",
    warning: "#fab847",
    warningText: "#d9ad3f",
    error: "#ff4751",
    errorText: "#ff8f96",
    confirm: "#55af7f",
    confirmText: "#51c48a",
    callToAction: "#dcb4fd",
  },
};

export const themeContextColor = (color, fallback) => (props) => {
  const fallbackColor = fallback ? fallback : "initial";
  return props.theme[color] || color || fallbackColor;
};

export default themes;
