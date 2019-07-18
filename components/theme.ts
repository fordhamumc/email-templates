import { defaultsDeep } from "lodash";

const defaultTheme = {
  colors: {
    primary: "#900028",
    asideBg: "#f0f0f0",
    accent: "#8e8083",
    rule: "#beb6b8",
    light: "#594f51",
    dark: "#231f20",
    text: "#231f20",
    textalt: "#fff",
    sectionHeader: "#900028",
    lineBreak: "#900028"
  },

  fonts: {
    text: `"leitura roman", Georgia, serif`,
    textAlt: `"Soleil", "Roboto", Arial, sans-serif`,
    heading: `"Soleil", "Roboto", Arial, sans-serif`,
    link: `"Soleil", "Roboto", Arial, sans-serif`
  },

  sizes: {
    outerWidth: 800,
    innerWidth: 720,
    gutter: 32,
    fontSize: 17,
    lineHeight: 1.6,
    break: 0,
    breakSm: 0,
    breakLg: 0
  }
};

const getTheme = (theme: object = {}) => {
  let state = defaultsDeep({}, theme, defaultTheme);
  const br = Math.round(state.sizes.fontSize * state.sizes.lineHeight);
  state.sizes.break = br;
  state.sizes.breakSm = Math.round(br * 0.75);
  state.sizes.breakLg = Math.round(br * 1.25);
  return state;
};

export interface IThemeProps {
  theme: typeof defaultTheme;
}

export default getTheme;
