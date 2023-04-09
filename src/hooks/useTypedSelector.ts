import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IUserDefaultState, IOrganizerDefaultState } from '../types/user.types';

interface IRootState {
  user: IUserDefaultState;
  organizer: IOrganizerDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
