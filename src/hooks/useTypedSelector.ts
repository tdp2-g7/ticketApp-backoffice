import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IUserDefaultState, IOrganizerDefaultState } from '../types/user.types';
import { IEventDefaultState } from '../types/event.types';

interface IRootState {
  user: IUserDefaultState;
  organizer: IOrganizerDefaultState;
  event: IEventDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
