import { IEvent } from '../../types/event.types';

export interface IEventListProps {
  events: IEvent[];
  getReportsById: (eventId: string) => void;
  organizerData?: any;
  onChangeBlock: (organizerId: string) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
