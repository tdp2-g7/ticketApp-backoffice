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
}

export interface IOrganizerDefaultState {
  organizers: IOrganizer[];
  loading: boolean;
  data: any;
}
  