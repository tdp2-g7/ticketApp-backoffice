import { useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import UsersList from '../views/UsersList';
import { onGetAllUsers, onGetReportsById } from '../redux/actions/user.actions';
import useTypedSelector from '../hooks/useTypedSelector';

import Layout from '../views/Layout';

const UsersListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { users, reports } = useTypedSelector((state) => state.user);

  useEffect(() => {
    dispatch(onGetAllUsers());
  }, [dispatch]);

  const getReportsById = (userId: string) => {
    if (userId) {
      dispatch(onGetReportsById(userId));
    }
  };

  console.log('LOS REPORTS SON ===)', reports);

  return (
    <>
      <Layout>
        {(
          <UsersList users={users} getReportsById={getReportsById}/>
        )}
      </Layout>
    </>
  );
};

export default UsersListContainer;
