import { FunctionComponent } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import ReportsByUserList from '../views/ReportsByUserList';
import Layout from '../views/Layout';

const ReportsByUserContainer: FunctionComponent = () => {
  const { reports } = useTypedSelector((state) => state.user);

  console.log('estoy en report by user container');
  console.log(reports);

  return (
    <Layout>
        {(
          <ReportsByUserList reports={reports}/>
        )}
    </Layout>
  );
};

export default ReportsByUserContainer;
