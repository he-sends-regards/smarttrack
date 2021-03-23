export const AppRoute = {
  DASHBOARD: "Dashboard",
  STUFF: "Stuff",
  ALERTS: "Alerts",
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
    title: AppRoute.ALERTS,
    logo: require("../assets/menu-icons/alerts.png"),
    activeLogo: require("../assets/menu-icons/alerts-active.png"),
  },
  {
    title: AppRoute.SEQUENCE,
    logo: require("../assets/menu-icons/sequence.png"),
    activeLogo: require("../assets/menu-icons/sequence-active.png"),
  },
];

export const alertTypes = [
  {
    name: "Assistant",
    color: "rgb(242,215,117)",
  },
  {
    name: "Doctor",
    color: "rgb(99,191,242)",
  },
  {
    name: "Finances",
    color: "rgb(147,157,255)",
  },
  {
    name: "Patient",
    color: "rgb(116,195,134)",
  },
  {
    name: "Emergency",
    color: "rgb(252,102,102)",
  },
  {
    name: "Empty",
    color: "rgb(221,221,221)",
  },
];
