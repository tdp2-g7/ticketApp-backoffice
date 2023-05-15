import { FunctionComponent, useState } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import ReportsByUserList from '../views/ReportsByUserList';
import Layout from '../views/Layout';

const ReportsByUserContainer: FunctionComponent = () => {
  const { userReports, user } = useTypedSelector((state) => state.user);
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <Layout>
        {(
          <ReportsByUserList reports={userReports} showDescription={showDescription}
          setShowDescription={setShowDescription} description={description}
          setDescription={setDescription} userInfo={user}/>
        )}
    </Layout>
  );
};

export default ReportsByUserContainer;
