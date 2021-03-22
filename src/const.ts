export const AppRoute = {
  DASHBOARD: "Dashboard",
  STUFF: "Stuff",
  ALLERTS: "Allerts",
  SEQUENCE: "Sequence",
};

export const textBaseColor = "#212121";
export const primaryColor = "#6AC7BE";
export const primaryActiveColor = "#C4E6E9";
export const dangerColor = "#FC7E55";

export const Color = {
  textBaseColor: "#212121",
  primaryColor: "#6AC7BE",
  primaryActiveColor: "#C4E6E9",
  dangerColor: "#FC7E55",
};

export const MenuItems = [
  {
    title: AppRoute.DASHBOARD,
    logo: require("./img/dashboard.png"),
    activeLogo: require("./img/dashboard-active.png"),
  },
  {
    title: AppRoute.STUFF,
    logo: require("./img/stuff.png"),
    activeLogo: require("./img/stuff-active.png"),
  },
  {
    title: AppRoute.ALLERTS,
    logo: require("./img/allerts.png"),
    activeLogo: require("./img/allerts-active.png"),
  },
  {
    title: AppRoute.SEQUENCE,
    logo: require("./img/sequence.png"),
    activeLogo: require("./img/sequence-active.png"),
  },
];
