export interface IUser {
    id: number;
    name: string;
    number_of_events: number;
}
  
export interface IUserDefaultState {
  users: IUser[];
  loading: boolean;
  data: any;
}
  