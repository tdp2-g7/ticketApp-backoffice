import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../views/Layout';
import MetricsView from '../views/Metrics/Metrics';
import useTypedSelector from '../hooks/useTypedSelector';
import { onGetMetricsWithoutFinishDateRequested } from '../redux/actions/event.actions';

const MetricsContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { graphicsWithoutFinishDate } = useTypedSelector((state) => state.event);

  useEffect(() => {
    dispatch(onGetMetricsWithoutFinishDateRequested());
  }, [dispatch]);
  return (
    <>
      <Layout>
        {(
          <MetricsView graphicsWithoutFinishDate={graphicsWithoutFinishDate}/>
        )}
      </Layout>
    </>
  );
};

export default MetricsContainer;
