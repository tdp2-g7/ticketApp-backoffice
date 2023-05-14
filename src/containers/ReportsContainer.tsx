import { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import EventReportList from '../views/EventReportList';
import useTypedSelector from '../hooks/useTypedSelector';
import { onGetAllEventReports } from '../redux/actions/event.actions';

import Layout from '../views/Layout';

const ReportsContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { reports } = useTypedSelector((state) => state.event);
  const [eventName, setEventName] = useState('');

  console.log(eventName);

  console.log('0000', reports);

  useEffect(() => {
    const data = {
      offset: 20,
      page: 1,
    };
    dispatch(onGetAllEventReports(data));
  }, [dispatch]);

  return (
    <>
      <Layout>
        {(
          <EventReportList reports={reports} setEventName={setEventName}/>
        )}
      </Layout>
    </>
  );
};

export default ReportsContainer;
