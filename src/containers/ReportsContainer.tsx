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
  const [filters, setFilters] = useState({
    name: '',
    fromDate: null,
    toDate: null,
  });

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
        name: filters.name,
        to_date: filters.toDate,
        from_date: filters.fromDate,
      };
      dispatch(onGetAllOrganizerReports(data));
    } else {
      const data = {
        offset: 20,
        page: 1,
        title: filters.name,
        to_date: filters.toDate,
        from_date: filters.fromDate,
      };
      dispatch(onGetAllEventReports(data));
    }
  };

  return (
    <>
      <Layout>
        {(
          <EventReportList eventReports={reports} userReports={userReports}
          organizerTitleColor={organizerTitleColor} setFilters={setFilters}
          handleTableChange={handleTableChange} eventTitleColor={eventTitleColor}
          showOrganizerTable={showOrganizerTable} filters={filters} handleFilters={handleFilters}/>
        )}
      </Layout>
    </>
  );
};

export default ReportsContainer;
