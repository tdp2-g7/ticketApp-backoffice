export interface IUser {
  id: number;
  name: string;
}

export interface IOrganizer {
  id: number;
  name: string;
  number_of_events: number;
}

export interface IUserDefaultState {
  users: IUser[];
  loading: boolean;
  data: any;
  administrator: IAdminsitrator | null;
  reports: IReport[]
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
}
