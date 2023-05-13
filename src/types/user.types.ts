import { IEvent } from "./event.types";

export interface IUser {
  userId: number;
  name: string;
  lastName: string;
  email: string;
  reports_nr: string;
}

export interface IOrganizer {
  userId: string;
  name: string;
  last_name: string;
  email: string;
  description: string;
  image: any;
  isBlocked: boolean;
  number_of_events?: number;
}

export interface IUserDefaultState {
  users: IUser[];
  loading: boolean;
  data: any;
  administrator: IAdminsitrator | null;
  reports: IReport[]
  user: IUser | null;
}

export interface IOrganizerDefaultState {
  organizers: IOrganizer[];
  loading: boolean;
  data: any;
}

export interface IAdminsitrator {
  email: string;
  password: string;
}

export interface IReport {
  id: string,
  eventId: string,
  userId: string,
  description: string,
  reason: string,
  date: Date,
  open: boolean,
  user: IUser;
  event: IEvent;
}
