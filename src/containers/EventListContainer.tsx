import { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import EventList from '../views/EventList';
import EmptyPage from '../views/EmptyPage';
import { onGetReportsById, onGetEventsFilteredBy } from '../redux/actions/event.actions';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout';
import { IOrganizer } from '../types/user.types';

const EventListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { events } = useTypedSelector((state) => state.event);
  const [searchParams] = useSearchParams();
  const organizerId = searchParams.get('organizerId');
  const { organizers } = useTypedSelector((state) => state.organizer);
  const [showModal, setShowModal] = useState(false);

  let organizerData;

  useEffect(() => {
    let data;
    if (organizerId) {
      data = {
        offset: 20,
        page: 1,
        organizerId,
      };
      dispatch(onGetEventsFilteredBy(data));
    } else {
      data = {
        offset: 20,
        page: 1,
      };
      dispatch(onGetEventsFilteredBy(data));
    }
  }, [dispatch]);

  if (organizerId) {
    organizerData = organizers.filter(
      (organizer: IOrganizer) => organizer.userId === organizerId,
    );
  }

  const getReportsById = (eventId: string) => {
    if (eventId) {
      dispatch(onGetReportsById(eventId));
    }
  };

  const showTable = events.length > 0;

  return (
    <>
    <Layout>
      {showTable ? (
        <EventList events={events} getReportsById={getReportsById} organizerData={organizerData}
        setShowModal={setShowModal} showModal={showModal}/>
      ) : (
        <EmptyPage/>
      )}
    </Layout>
    </>
  );
};

export default EventListContainer;
