import { FunctionComponent } from 'react';
import Layout from '../views/Layout';
import MainPage from '../views/MainPage';

/* eslint-disable */
const MainPageContainer: FunctionComponent = () => {
  return (
    <>
      <Layout>
        {(
          <MainPage/>
        )}
      </Layout>
    </>
  );
};
/* eslint-enable */

export default MainPageContainer;
