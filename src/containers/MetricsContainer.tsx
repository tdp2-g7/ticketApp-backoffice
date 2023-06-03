import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout';
import MetricsView from '../views/Metrics/Metrics';
import useTypedSelector from '../hooks/useTypedSelector';
import {
  onGetMetricsAccreditedClientsRequested,
  onGetMetricsWithoutFinishDateRequested,
} from '../redux/actions/event.actions';
import { visualizationTypes } from '../helpers/visualizationTypes';
import { numToMonth } from '../helpers/months';

const MetricsContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { graphicsWithoutFinishDate, graphicsAccreditedClients } = useTypedSelector(
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

  useEffect(() => {
    dispatch(onGetMetricsWithoutFinishDateRequested());
    dispatch(
      onGetMetricsAccreditedClientsRequested({
        startDate,
        endDate,
        visualizationType,
      }),
    );
  }, [dispatch, startDate, endDate]);

  return (
    <>
      <Layout>
        {
          <MetricsView
            graphicsWithoutFinishDate={graphicsWithoutFinishDate}
            graphicsAccreditedClients={graphicsAccreditedClientsWithMonth}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setVisualizationType={setVisualizationType}
            visualizationType={visualizationType}
          />
        }
      </Layout>
    </>
  );
};

export default MetricsContainer;
