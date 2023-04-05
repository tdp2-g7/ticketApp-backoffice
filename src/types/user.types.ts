export interface IUser {
    name: string;
    number_of_events: string;
}
  
export interface IUserDefaultState {
  loading: boolean;
  users: IUser[];
  data: any;
  maxPage: number;
}
  