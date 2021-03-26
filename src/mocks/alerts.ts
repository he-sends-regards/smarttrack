import {generateId} from "../utils";

type alertType = {
  status: string;
  color: string;
  id: string;
};

type mockAlertType = {
  [key: string]: alertType[];
};

export const mockAlerts: mockAlertType = {
  doctors: [
    {
      status: "Patient in",
      color: "#78F275",
    },
    {
      status: "Assistent required",
      color: "#86E8EE",
    },
    {
      status: "Doctor required",
      color: "#E485F3",
    },
    {
      status: "Doctor in",
      color: "#C4E6E9",
    },
    {
      status: "Assistent in",
      color: "#78F275",
    },
    {
      status: "Emergency",
      color: "#FA700C",
    },
    {
      status: "Financial",
      color: "#86E8EE",
    },
    {
      status: "Financialddd",
      color: "#78F275",
    },
    {
      status: "Financials",
      color: "#78F275",
    },
  ].map(doctor => Object.assign({}, doctor, {id: generateId()})),
  assistans: [
    {
      status: "Financial",
      color: "#86E8EE",
    },
    {
      status: "Financialddd",
      color: "#78F275",
    },
    {
      status: "Financials",
      color: "#78F275",
    },
    {
      status: "Patient in",
      color: "#78F275",
    },
    {
      status: "Assistent required",
      color: "#86E8EE",
    },
    {
      status: "Doctor required",
      color: "#E485F3",
    },
    {
      status: "Doctor in",
      color: "#C4E6E9",
    },
    {
      status: "Assistent in",
      color: "#78F275",
    },
    {
      status: "Emergency",
      color: "#FA700C",
    },
  ].map(assistan => Object.assign({}, assistan, {id: generateId()})),
  receptionist: [
    {
      status: "Assistent required",
      color: "#86E8EE",
    },
    {
      status: "Doctor required",
      color: "#E485F3",
    },
    {
      status: "Patient in",
      color: "#78F275",
    },
    {
      status: "Doctor in",
      color: "#C4E6E9",
    },
    {
      status: "Assistent in",
      color: "#78F275",
    },
    {
      status: "Emergency",
      color: "#FA700C",
    },
    {
      status: "Financial",
      color: "#86E8EE",
    },
    {
      status: "Financialddd",
      color: "#78F275",
    },
    {
      status: "Financials",
      color: "#78F275",
    },
  ].map(rec => Object.assign({}, rec, {id: generateId()})),
};
