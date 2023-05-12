import { useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import EventList from '../views/EventList';
import { onGetAllEvents, onGetReportsById } from '../redux/actions/event.actions';
import useTypedSelector from '../hooks/useTypedSelector';

import Layout from '../views/Layout';
import { IOrganizer } from '../types/user.types';

const EventListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { events } = useTypedSelector((state) => state.event);
  const [searchParams] = useSearchParams();
  const organizerId = searchParams.get('organizerId');
  const { organizers } = useTypedSelector((state) => state.organizer);
  let organizerData;

  useEffect(() => {
    dispatch(onGetAllEvents());
  }, [dispatch]);

  const getReportsById = (eventId: string) => {
    if (eventId) {
      dispatch(onGetReportsById(eventId));
    }
  };

  return (
    <>
      <Layout>
        {(
          <EventList events={events} getReportsById={getReportsById}/>
        )}
      </Layout>
    </>
  );
};

export default EventListContainer;
