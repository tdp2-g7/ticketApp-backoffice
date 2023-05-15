import { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import EventReportList from '../views/EventReportList';
import useTypedSelector from '../hooks/useTypedSelector';
import { onGetAllEventReports } from '../redux/actions/event.actions';
import { onGetAllOrganizerReports } from '../redux/actions/user.actions';
import Layout from '../views/Layout';
import COLORS from '../helpers/colors';

const ReportsContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { reports } = useTypedSelector((state) => state.event);
  const { userReports } = useTypedSelector((state) => state.user);
  const [eventName, setEventName] = useState('');
  const [organizerTitleColor, setOrganizerTitleColor] = useState('');
  const [eventTitleColor, setEventTitleColor] = useState('');
  const [showOrganizerTable, setShowOrganizerTable] = useState(false);

  console.log(eventName);

  useEffect(() => {
    const data = {
      offset: 20,
      page: 1,
    };
    dispatch(onGetAllEventReports(data));
  }, [dispatch]);

  const handleTableChange = (title: string) => {
    if (title === 'organizer') {
      setOrganizerTitleColor(COLORS.darkViolet);
      setEventTitleColor(COLORS.gray);
      setShowOrganizerTable(true);
      const data = {
        offset: 20,
        page: 1,
      };
      console.log('despacho on get all organizer...');
      dispatch(onGetAllOrganizerReports(data));
    } else {
      setOrganizerTitleColor(COLORS.gray);
      setEventTitleColor(COLORS.darkViolet);
      setShowOrganizerTable(false);
      const data = {
        offset: 20,
        page: 1,
      };
      dispatch(onGetAllEventReports(data));
    }
  };

  return (
    <>
      <Layout>
        {(
          <EventReportList eventReports={reports} userReports={userReports}
          setEventName={setEventName} organizerTitleColor={organizerTitleColor}
          handleTableChange={handleTableChange} eventTitleColor={eventTitleColor}
          showOrganizerTable={showOrganizerTable}/>
        )}
      </Layout>
    </>
  );
};

export default ReportsContainer;
