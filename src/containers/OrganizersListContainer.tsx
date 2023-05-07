import { useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import OrganizersList from '../views/OrganizersList';
import { onGetAllOrganizers } from '../redux/actions/user.actions';
import useTypedSelector from '../hooks/useTypedSelector';

import Layout from '../views/Layout';

const UsersListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { organizers } = useTypedSelector((state) => state.organizer);

  useEffect(() => {
    dispatch(onGetAllOrganizers());
  }, [dispatch]);

  return (
    <>
      <Layout>
        {(
          <OrganizersList organizers={organizers}/>
        )}
      </Layout>
    </>
  );
};

export default UsersListContainer;
