import { useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import EventList from '../views/EventList';
import { onGetAllEvents, onGetReportsById } from '../redux/actions/event.actions';
import useTypedSelector from '../hooks/useTypedSelector';

import Layout from '../views/Layout';

const EventListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { events } = useTypedSelector((state) => state.event);

  useEffect(() => {
    dispatch(onGetAllEvents());
  }, [dispatch]);

  const getReportsById = (eventId: string) => {
    if (eventId) {
      dispatch(onGetReportsById(eventId));
    }
  };

  console.log(events);

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
