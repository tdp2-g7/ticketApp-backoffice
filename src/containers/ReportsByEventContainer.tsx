import { FunctionComponent, useState } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import ReportsByEventList from '../views/ReportsByEventList';
import Layout from '../views/Layout';
import Loading from '../components/Loading/Loading';

const ReportsByEventContainer: FunctionComponent = () => {
  const { reports, event, loadingEvent } = useTypedSelector((state) => state.event);
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <>
      {loadingEvent ? (
        <Layout>
          <Loading/>
        </Layout>
      ) : (
    <>
    <Layout>
        {(
          <ReportsByEventList reports={reports} showDescription={showDescription}
          setShowDescription={setShowDescription} description={description}
          setDescription={setDescription} eventInfo={event}/>
        )}
    </Layout>
    </>
      )}
    </>
  );
};

export default ReportsByEventContainer;
