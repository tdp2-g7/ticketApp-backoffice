import { IReport } from '../../types/user.types';

export interface IEventReportListProps {
  userReports: IReport[];
  eventReports: IReport[];
  organizerTitleColor: string;
  eventTitleColor: string;
  handleTableChange: (value: string) => void;
  showOrganizerTable: boolean;
  handleFilters: (value: boolean) => void;
  setName: (value: string) => void;
  toDate: Date;
  setToDate: (value: Date) => void;
  fromDate: Date;
  setFromDate: (value: Date) => void;
}

export interface IFormData {
  startDate: Date;
  endDate: Date;
  name: string;
}

export interface ITitleProps {
  color: string;
}

export interface IEventReportRowsTable{
  id: string;
  title: string;
  reporterName: string;
  date: string;
  description: string;
}

export interface IOrganizerReportRowsTable{
  id: string;
  name: string;
  lastName: string;
  date: string;
  description: string;
  title: string;
  reporterName: string;
}
