import {stuffWorkerType} from "./../types/index";
import {generateId} from "./../utils";

type mockStuffType = {
  [key: string]: stuffWorkerType[];
};

const doctors = [
  {
    name: "Dan",
    email: "test1@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [
      {
        status: "Patient in",
        color: "#78F275",
      },
      {
        status: "Assistent required",
        color: "#86E8EE",
      },
    ],
  },
  {
    name: "Bob",
    email: "test2@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [
      {
        status: "Patient in",
        color: "#78F275",
      },
      {
        status: "Assistent required",
        color: "#86E8EE",
      },
    ],
  },
  {
    name: "Alice",
    email: "test3@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
].map(doctor => {
  const id = generateId();
  const alertsWithId = doctor.alerts.map(alert => ({...alert, id}));

  return {...doctor, id, alerts: alertsWithId};
});

const assistants = [
  {
    name: "John",
    email: "test11@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
  {
    name: "Helen",
    email: "test122@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
  {
    name: "Ivan",
    email: "test13@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
  {
    name: "Anna",
    email: "test14@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
  {
    name: "Ken",
    email: "test5@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
  {
    name: "Barbie",
    email: "test6@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
  {
    name: "qwe",
    email: "test5@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
  {
    name: "ewq",
    email: "test6@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
    alerts: [],
  },
].map(doctor => Object.assign({}, doctor, {id: generateId()}));

const receptionists = [
  {
    name: "Liza",
    email: "test1@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
  },
  {
    name: "Philip",
    email: "test2@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
  },
  {
    name: "Kate",
    email: "test3@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
  },
  {
    name: "Anna",
    email: "test4@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
  },
  {
    name: "Ken",
    email: "test5@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
  },
  {
    name: "Barbie",
    email: "test6@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
  },
  {
    name: "qwe",
    email: "test5@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
  },
  {
    name: "ewq",
    email: "test6@gmail.com",
    phoneNumber: "123123123",
    rooms: ["1b", "2c"],
  },
].map(doctor => Object.assign({}, doctor, {id: generateId()}));

export default {
  doctors,
  assistants,
  receptionists,
};

export const mockStuff: mockStuffType = {
  doctors: [
    {
      name: "Dan",
      email: "test1@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
      alerts: [],
    },
    {
      name: "Bob",
      email: "test2@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Alice",
      email: "test3@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Anna",
      email: "test4@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Ken",
      email: "test5@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Barbie",
      email: "test6@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "qwe",
      email: "test5@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "ewq",
      email: "test6@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
  ].map(doctor => Object.assign({}, doctor, {id: generateId()})),
  assistants: [
    {
      name: "John",
      email: "test11@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Helen",
      email: "test122@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Ivan",
      email: "test13@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Anna",
      email: "test14@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Ken",
      email: "test5@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Barbie",
      email: "test6@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "qwe",
      email: "test5@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "ewq",
      email: "test6@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
  ].map(doctor => Object.assign({}, doctor, {id: generateId()})),
  receptionists: [
    {
      name: "Liza",
      email: "test1@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Philip",
      email: "test2@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Kate",
      email: "test3@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Anna",
      email: "test4@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Ken",
      email: "test5@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "Barbie",
      email: "test6@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "qwe",
      email: "test5@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
    {
      name: "ewq",
      email: "test6@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
    },
  ].map(doctor => Object.assign({}, doctor, {id: generateId()})),
};
