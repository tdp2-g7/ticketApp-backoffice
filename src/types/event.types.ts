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
    chedule?: ISchedule[];
    userId?: string;
    eventId: string;
    ticketsSold?: number;
    reports_nr: string;
    state: number;
  }
  
export interface IEventDefaultState {
  loading: boolean;
  events: IEvent[];
  data: any;
  reports: IReport[];
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

export interface IEventTable{
  eventId: string,
  title: string,
  date: string,
  startTime: string,
}

export interface IReport {
  id: string,
  eventId: string,
  userId: string,
  description: string,
  reason: string,
  date: Date,
  open: boolean,
}
