const colors = {
  primary: "#900028",
  asideBg: "#f0f0f0",
  accent: "#8e8083",
  rule: "#beb6b8",
  light: "#594f51",
  dark: "#231f20",
  text: "#231f20",
  textalt: "#fff",
  navbar: "#900028"
};

const fonts = {
  text: `"leitura roman", Georgia, serif`,
  heading: `"Soleil", "Roboto", Arial, sans-serif`,
  link: `"Soleil", "Roboto", Arial, sans-serif`
};

const sizes = {
  outerWidth: 800,
  innerWidth: 720,
  gutter: 32,
  fontSize: 17,
  lineHeight: 1.6,
  break: 0,
  breakSm: 0,
  breakLg: 0
};

sizes.break = Math.round(sizes.fontSize * sizes.lineHeight);
sizes.breakSm = Math.round(sizes.break * 0.75);
sizes.breakLg = Math.round(sizes.break * 1.25);

export { colors, fonts, sizes };
