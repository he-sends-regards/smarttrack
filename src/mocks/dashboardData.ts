export type alertType = {
  logo: string;
  title: string;
  room: string;
  time: string;
};

export type dashboardItemType = {
  name: string;
  position: string;
  alerts: alertType[];
};

export const mockDashboardData: dashboardItemType[] = [
  {
    name: "Benedict Cumberbatch",
    position: "Therapist",
    alerts: [
      {
        logo: "4",
        title: "Assistant required",
        room: "1b",
        time: new Date().getTime().toString(),
      },
      {
        logo: "A",
        title: "Assistant in",
        room: "1c",
        time: new Date().getTime().toString(),
      },
      {
        logo: "D",
        title: "Assistant required",
        room: "1d",
        time: new Date().getTime().toString(),
      },
      {
        logo: "D",
        title: "Assistant required",
        room: "1a",
        time: new Date().getTime().toString(),
      },
    ],
  },
  {
    name: "Harry Styles",
    position: "Therapist",
    alerts: [
      {
        logo: "",
        title: "Empty",
        room: "2b",
        time: new Date().getTime().toString(),
      },
      {
        logo: "A",
        title: "Assistant required",
        room: "2c",
        time: new Date().getTime().toString(),
      },
      {
        logo: "D",
        title: "Assistant required",
        room: "2d",
        time: new Date().getTime().toString(),
      },
      {
        logo: "D",
        title: "Doctor in",
        room: "2a",
        time: new Date().getTime().toString(),
      },
    ],
  },
  {
    name: "John Dorian",
    position: "Therapist",
    alerts: [
      {
        logo: "",
        title: "Empty",
        room: "3b",
        time: new Date().getTime().toString(),
      },
      {
        logo: "A",
        title: "Patient in",
        room: "3c",
        time: new Date().getTime().toString(),
      },
      {
        logo: "D",
        title: "Assistant required",
        room: "3d",
        time: new Date().getTime().toString(),
      },
      {
        logo: "D",
        title: "Doctor in",
        room: "3a",
        time: new Date().getTime().toString(),
      },
    ],
  },
];
