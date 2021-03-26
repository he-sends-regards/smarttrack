export type alertType = {
  status: string;
  color: string;
  id: string;
};

export type stuffWorkerType = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
  alerts?: alertType[] | [];
};
