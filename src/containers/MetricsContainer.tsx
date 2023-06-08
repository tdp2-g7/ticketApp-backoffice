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

  console.log(graphicsFullInterval);

  return (
    <>
      <Layout>
        {
          <MetricsView
            graphicsWithoutFinishDate={graphicsWithoutFinishDate}
            graphicsAccreditedClients={graphicsAccreditedClientsWithMonth}
            graphicsFullInterval={graphicsFullInterval}
            setStartDate={setStartDate}
            startDate={startDate}
            setEndDate={setEndDate}
            endDate={endDate}
            setVisualizationType={setVisualizationType}
            visualizationType={visualizationType}
          />
        }
      </Layout>
    </>
  );
};

export default MetricsContainer;
