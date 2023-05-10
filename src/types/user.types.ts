export interface IUser {
  userId: string;
  name: string;
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
