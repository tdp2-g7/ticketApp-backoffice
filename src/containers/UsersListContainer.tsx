import { FunctionComponent } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import UsersList from '../views/UsersList';
import Sidebar from '../views/Sidebar';

const UsersListContainer: FunctionComponent = () => {
  const { users } = useTypedSelector((state) => state.user);

  /* useEffect(() => {
    // TODO change userId
    const data = {
      page: currentPage,
      offset: ITEMS_PER_PAGE,
    };
    //dispatch(onGetAllEventsByUserIdRequested(data));
  }, [dispatch, currentPage]); */

  return (
    <Sidebar>
      {users && (<UsersList users={users} />)}
    </Sidebar>
  );
};

export default UsersListContainer;
