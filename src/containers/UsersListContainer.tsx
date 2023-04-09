import { useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import UsersList from '../views/UsersList';
import { onGetAllUsers } from '../redux/actions/user.actions';
import useTypedSelector from '../hooks/useTypedSelector';

import Layout from '../views/Layout';

const UsersListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { users } = useTypedSelector((state) => state.user);

  useEffect(() => {
    dispatch(onGetAllUsers());
  }, [dispatch]);

  return (
    <>
      <Layout title = 'Users'>
        {(
          <UsersList users={users}/>
        )}
      </Layout>
    </>
  );
};

export default UsersListContainer;
