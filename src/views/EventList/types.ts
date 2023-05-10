import { IEvent } from '../../types/event.types';

export interface IEventListProps {
  events: IEvent[];
  getReportsById: (eventId: string) => void;
}
