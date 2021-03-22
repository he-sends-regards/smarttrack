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
    logo: require("../assets/menu-icons/dashboard.png"),
    activeLogo: require("../assets/menu-icons/dashboard-active.png"),
  },
  {
    title: AppRoute.STUFF,
    logo: require("../assets/menu-icons/stuff.png"),
    activeLogo: require("../assets/menu-icons/stuff-active.png"),
  },
  {
    title: AppRoute.ALLERTS,
    logo: require("../assets/menu-icons/allerts.png"),
    activeLogo: require("../assets/menu-icons/allerts-active.png"),
  },
  {
    title: AppRoute.SEQUENCE,
    logo: require("../assets/menu-icons/sequence.png"),
    activeLogo: require("../assets/menu-icons/sequence-active.png"),
  },
];
