import { IEvent } from '../../types/event.types';

export interface IEventListProps {
  events: IEvent[];
  getReportsById: (eventId: string) => void;
  organizerData?: any;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
