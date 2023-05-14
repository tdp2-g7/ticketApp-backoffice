import { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import OrganizersList from '../views/OrganizersList';
import { onChangeBlockRequested, onGetAllOrganizers } from '../redux/actions/user.actions';
import useTypedSelector from '../hooks/useTypedSelector';

import Layout from '../views/Layout';

const OrganizerListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { organizers } = useTypedSelector((state) => state.organizer);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(onGetAllOrganizers());
  }, [dispatch]);

  const onChangeBlock = (organizerId: string) => {
    if (organizerId) {
      dispatch(onChangeBlockRequested(organizerId));
    }
  };

  return (
    <>
      <Layout>
        {(
          <OrganizersList organizers={organizers} onChangeBlock={onChangeBlock}
          setShowModal={setShowModal} showModal={showModal}/>
        )}
      </Layout>
    </>
  );
};

export default OrganizerListContainer;
