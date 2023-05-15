import { IReport, IUser } from '../../types/user.types';

export interface IReportsByUserListProps {
  reports: IReport[];
  userInfo: IUser | null;
  setShowDescription: (value: boolean) => void;
  showDescription: boolean;
  setDescription: (text: string) => void;
  description: string;
}

export interface IReportsTable {
  eventId: string;
  eventName: string;
  date: string;
  description: string;
  reason: string;
}
