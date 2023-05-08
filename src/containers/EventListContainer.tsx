import { useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import EventList from '../views/EventList';
import { onGetAllEvents, onGetEventsFilteredBy } from '../redux/actions/event.actions';
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
      dispatch(onGetAllEvents(data));
    }
  }, [dispatch]);

  if (organizerId) {
    organizerData = organizers.filter(
      (organizer: IOrganizer) => organizer.userId === organizerId,
    );
  }

  return (
    <>
      <Layout>
        {<EventList events={events} organizerData={organizerData} />}
      </Layout>
    </>
  );
};

export default EventListContainer;
