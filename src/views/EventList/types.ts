import { IEvent } from '../../types/event.types';

export interface IEventListProps {
  events: IEvent[];
  organizerData?: any;
  onChangeBlock: (organizerId: string) => void;
}
