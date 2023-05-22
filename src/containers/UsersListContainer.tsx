import { useEffect, useState, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import UsersList from '../views/UsersList';
import { onGetAllUsers, onGetReportsById } from '../redux/actions/user.actions';
import useTypedSelector from '../hooks/useTypedSelector';
import Loading from '../components/Loading/Loading';
import Layout from '../views/Layout';

const UsersListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { users, loading } = useTypedSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(onGetAllUsers());
  }, [dispatch]);

  const getReportsById = (userId: string) => {
    if (userId) {
      dispatch(onGetReportsById(userId));
    }
  };

  return (
    <>
      {loading ? (
        <Layout>
          <Loading/>
        </Layout>
      ) : (
    <>
      <Layout>
        {(
          <UsersList users={users} getReportsById={getReportsById}
          setShowModal={setShowModal} showModal={showModal}/>
        )}
      </Layout>
    </>
      )}
    </>
  );
};

export default UsersListContainer;
