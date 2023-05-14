import { IReport } from './user.types';

export interface IEvent {
  title: string;
  description: string;
  location: ILocation;
  type: string;
  date: Date;
  startTime: Date | null;
  endTime: Date | null;
  images: any;
  mainImage?: any;
  vacancies: number;
  ticketsPerPerson: number;
  faqs: string;
  schedule?: ISchedule[];
  userId?: string;
  eventId: string;
  ticketsSold?: number;
  reports_nr: number;
  state: number;
}

export interface IEventDefaultState {
  loading: boolean;
  events: IEvent[];
  data: any;
  eventBlock: boolean;
  reports: IReport[];
  event: IEvent | null;
}

export interface ISchedule {
  startTime: Date;
  endTime: Date;
  description: string;
}

export interface ILocation {
  lat: number | string;
  lng: number | string;
  label: string;
}

export interface ILocationMap {
  location: ILocation;
  name: string;
}

export interface IEventTable {
  eventId: string;
  title: string;
  date: string;
  startTime: string;
  state: number;
  stateText: string;
}
