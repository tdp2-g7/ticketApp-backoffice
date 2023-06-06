import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout';
import MetricsView from '../views/Metrics/Metrics';
import useTypedSelector from '../hooks/useTypedSelector';
import {
  onGetMetricsAccreditedClientsRequested,
  onGetMetricsFullIntervalRequested,
  onGetMetricsWithoutFinishDateRequested,
} from '../redux/actions/event.actions';
import { visualizationTypes } from '../helpers/visualizationTypes';
import { numToMonth } from '../helpers/months';

const MetricsContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const {
    graphicsWithoutFinishDate,
    graphicsAccreditedClients,
    graphicsFullInterval,
  } = useTypedSelector(
    (state) => state.event,
  );

  // Default es 15 dias antes de la fecha actual
  const [startDate, setStartDate] = useState(
    new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState(new Date());
  const [visualizationType, setVisualizationType] = useState(visualizationTypes[0].value);

  const graphicsAccreditedClientsWithMonth = graphicsAccreditedClients?.bar_chart.map(
    (option: any) => ({
      name: numToMonth(option.name),
      cantidad: option.cantidad,
    }),
  );

  const graphicsBlockedOrganizersByReports = [
    { name: '1-4', value: 2 },
    { name: '5-8', value: 4 },
    { name: '9-12', value: 8 },
    { name: '13-16', value: 10 },
    { name: '17-20', value: 12 },
    { name: '21-24', value: 3 },
    { name: '25-28', value: 2 },
    { name: '29-32', value: 1 },
  ];

  const graphicsTop10Organizers = [
    { name: 'All Access', value: 40 },
    { name: 'MalbaCine', value: 25 },
    { name: 'Fi Eventos', value: 20 },
    { name: 'Tuentrada', value: 17 },
    { name: 'LucaPerez', value: 12 },
    { name: 'ONUKids', value: 11 },
    { name: 'IndieFest', value: 10 },
    { name: 'TechLab', value: 4 },
    { name: 'BACiencia', value: 2 },
    { name: 'BACultura', value: 1 },
  ];

  const graphicsTwoLines = [
    { name: '01/4', eventos: 40, usuarios: 1 },
    { name: '8/4', eventos: 25, usuarios: 8 },
    { name: '15/4', eventos: 20, usuarios: 5 },
    { name: '20/4', eventos: 17, usuarios: 1 },
    { name: '25/4', eventos: 12, usuarios: 2 },
  ];

  useEffect(() => {
    if (startDate) {
      dispatch(onGetMetricsWithoutFinishDateRequested(startDate));
    }
  }, [dispatch, startDate]);

  useEffect(() => {
    if (startDate && endDate && visualizationType) {
      dispatch(
        onGetMetricsAccreditedClientsRequested({
          startDate,
          endDate,
          visualizationType,
        }),
      );
    }
  }, [dispatch, startDate, endDate, visualizationType]);

  useEffect(() => {
    if (startDate && endDate) {
      dispatch(onGetMetricsFullIntervalRequested({ startDate, endDate }));
    }
  }, [dispatch, startDate, endDate]);

  return (
    <>
      <Layout>
        {
          <MetricsView
            graphicsWithoutFinishDate={graphicsWithoutFinishDate}
            graphicsAccreditedClients={graphicsAccreditedClientsWithMonth}
            graphicsFullInterval={graphicsFullInterval}
            graphicsBlockedOrganizersByReports={graphicsBlockedOrganizersByReports}
            setStartDate={setStartDate}
            startDate={startDate}
            setEndDate={setEndDate}
            endDate={endDate}
            setVisualizationType={setVisualizationType}
            visualizationType={visualizationType}
            graphicsTop10Organizers={graphicsTop10Organizers}
            graphicsTwoLines={graphicsTwoLines}
          />
        }
      </Layout>
    </>
  );
};

export default MetricsContainer;
