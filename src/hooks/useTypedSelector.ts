import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IUserDefaultState } from '../types/user.types';

interface IRootState {
  user: IUserDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
