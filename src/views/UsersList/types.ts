import { IUser } from '../../types/user.types';

export interface IUsersListProps {
  users: IUser[];
  getReportsById: (userId: string) => void;
}
