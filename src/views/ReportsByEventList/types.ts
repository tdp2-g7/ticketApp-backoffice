import { IReport } from '../../types/user.types';
import { IEvent } from '../../types/event.types';

export interface IReportsByUserListProps {
  reports: IReport[];
  setShowDescription: (value: boolean) => void;
  showDescription: boolean;
  setDescription: (text: string) => void;
  description: string;
  eventInfo: IEvent | null;
}

export interface IReportsTable {
  userId: string;
  userName: string;
  date: string;
  description: string;
  reason: string;
}
