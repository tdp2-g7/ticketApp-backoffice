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
    new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState(new Date());
  const [visualizationType, setVisualizationType] = useState(visualizationTypes[0].value);

  let graphicsAccreditedClientsWithMonth;
  if (Number(visualizationType) === visualizationTypes[1].value) {
    graphicsAccreditedClientsWithMonth = graphicsAccreditedClients?.map(
      (option: any) => ({
        name: numToMonth(Number(option.name)),
        cantidad: option.cantidad,
      }),
    );
  } else {
    graphicsAccreditedClientsWithMonth = graphicsAccreditedClients;
  }

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
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          visualizationType,
        }),
      );
    }
  }, [dispatch, startDate, endDate, visualizationType]);

  useEffect(() => {
    if (startDate && endDate) {
      const data = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      };
      dispatch(onGetMetricsFullIntervalRequested(data));
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
            graphicsTwoLines={graphicsTwoLines}
          />
        }
      </Layout>
    </>
  );
};

export default MetricsContainer;
