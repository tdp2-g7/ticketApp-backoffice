import { IReport } from '../../types/user.types';

export interface IEventReportListProps {
  reports: IReport[];
  setEventName: (name: string) => void;
}

export interface IFormData {
  startDate: Date;
  endDate: Date;
  name: string;
}
