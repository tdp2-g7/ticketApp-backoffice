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
  lastName: string;
  email: string;
  description?: string;
  image?: any;
  blockedDate?: Date;
  number_of_events?: number;
  state: string;
}

export interface IOrganizerTable {
  userId: string;
  name: string;
  lastName: string;
  email: string;
  blockedDate?: Date;
  stateText: string;
  state: string;
}

export interface IUserDefaultState {
  users: IUser[];
  loading: boolean;
  data: any;
  administrator: IAdminsitrator | null;
  userReports: IReport[]
  user: IUser | null;
}

export interface IOrganizerDefaultState {
  organizers: IOrganizer[];
  loading: boolean;
  data: any;
  organizerBlock: boolean;
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
  organizer: IOrganizer;
}

export interface IOrganizerTable{
  userId: string,
  name: string,
  lastName: string,
  email: string,
  state: string,
}
