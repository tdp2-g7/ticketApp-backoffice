import { IOrganizer } from '../../types/user.types';

export interface IOrganizersListProps {
  organizers: IOrganizer[];
  onChangeBlock: (organizerId: string) => void;
}
