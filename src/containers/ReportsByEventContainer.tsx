import { FunctionComponent, useState } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import ReportsByEventList from '../views/ReportsByEventList';
import Layout from '../views/Layout';

const ReportsByEventContainer: FunctionComponent = () => {
  const { reports, event } = useTypedSelector((state) => state.event);
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <Layout>
        {(
          <ReportsByEventList reports={reports} showDescription={showDescription}
          setShowDescription={setShowDescription} description={description}
          setDescription={setDescription} eventInfo={event}/>
        )}
    </Layout>
  );
};

export default ReportsByEventContainer;
