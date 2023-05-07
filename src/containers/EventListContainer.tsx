import { useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import EventList from '../views/EventList';
import { onGetAllEvents } from '../redux/actions/event.actions';
import useTypedSelector from '../hooks/useTypedSelector';

import Layout from '../views/Layout';

const EventListContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { events } = useTypedSelector((state) => state.event);

  useEffect(() => {
    const data = {
      offset: 20,
      page: 1,
    };
    dispatch(onGetAllEvents(data));
  }, [dispatch]);

  return (
    <>
      <Layout>
        {(
          <EventList events={events}/>
        )}
      </Layout>
    </>
  );
};

export default EventListContainer;
