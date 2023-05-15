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
  const [organizerTitleColor, setOrganizerTitleColor] = useState(COLORS.darkViolet);
  const [eventTitleColor, setEventTitleColor] = useState(COLORS.gray);
  const [showOrganizerTable, setShowOrganizerTable] = useState(false);
  const [name, setName] = useState('');
  const [toDate, setToDate] = useState(new Date());
  const [fromDate, setFromDate] = useState(new Date());

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

  const handleFilters = (organizer: boolean) => {
    if (organizer) {
      const data = {
        offset: 20,
        page: 1,
        name,
        to_date: toDate.toISOString(),
        from_date: fromDate.toISOString(),
      };
      dispatch(onGetAllOrganizerReports(data));
    } else {
      const data = {
        offset: 20,
        page: 1,
        title: name,
        to_date: toDate.toISOString(),
        from_date: fromDate.toISOString(),
      };
      dispatch(onGetAllEventReports(data));
    }
  };

  return (
    <>
      <Layout>
        {(
          <EventReportList eventReports={reports} userReports={userReports}
          organizerTitleColor={organizerTitleColor} eventTitleColor={eventTitleColor}
          handleTableChange={handleTableChange} handleFilters={handleFilters}
          showOrganizerTable={showOrganizerTable} setName={setName}
          toDate={toDate} setToDate={setToDate} fromDate={fromDate} setFromDate={setFromDate}/>
        )}
      </Layout>
    </>
  );
};

export default ReportsContainer;
