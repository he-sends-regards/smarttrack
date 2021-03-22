type stuffWorkerType = {
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
};

type mockStuffType = {
  [key: string]: stuffWorkerType[];
};

export const mockStuff: mockStuffType = {
  doctors: [
    {
      name: "Dan",
      email: "test1@gmail.com",
      phoneNumber: "123123123",
      rooms: ["1b", "2c"],
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
  ],
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
  ],
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
  ],
};
