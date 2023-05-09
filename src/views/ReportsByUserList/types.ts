import { IReport } from '../../types/user.types';

export interface IReportsByUserListProps {
  reports: IReport[];
  setShowDescription: (value: boolean) => void;
  showDescription: boolean;
  setDescription: (text: string) => void;
  description: string;
}
