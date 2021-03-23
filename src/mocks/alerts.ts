type alertType = {
  status: string;
  color: string;
};

type mockAlertType = {
  [key: string]: alertType[];
};

export const mockAlerts: mockAlertType = {
  doctors: [
    {
      status: "Patient in",
      color: "green",
    },
    {
      status: "Assistent required",
      color: "green",
    },
    {
      status: "Doctor required",
      color: "green",
    },
    {
      status: "Doctor in",
      color: "green",
    },
    {
      status: "Assistent in",
      color: "green",
    },
    {
      status: "Emergency",
      color: "green",
    },
    {
      status: "Financial",
      color: "green",
    },
    {
      status: "Financialddd",
      color: "green",
    },
    {
      status: "Financials",
      color: "green",
    },
  ],
  assistans: [
    {
      status: "Doctor in",
      color: "green",
    },
    {
      status: "Assistent in",
      color: "green",
    },
    {
      status: "Patient in",
      color: "green",
    },
    {
      status: "Assistent required",
      color: "green",
    },
    {
      status: "Doctor required",
      color: "green",
    },
    {
      status: "Emergency",
      color: "green",
    },
    {
      status: "Financial",
      color: "green",
    },
  ],
  receptionist: [
    {
      status: "Assistent required",
      color: "green",
    },
    {
      status: "Patient in",
      color: "green",
    },
    {
      status: "Doctor required",
      color: "green",
    },
    {
      status: "Doctor in",
      color: "green",
    },
    {
      status: "Assistent in",
      color: "green",
    },
    {
      status: "Emergency",
      color: "green",
    },
    {
      status: "Financial",
      color: "green",
    },
  ],
};
