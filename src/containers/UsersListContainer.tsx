import { FunctionComponent } from 'react';
import UsersList from '../views/UsersList';
import Layout from '../views/Layout';

const UsersListContainer: FunctionComponent = () => (
  <Layout>
    {(
      <UsersList/>
    )}
  </Layout>
);

export default UsersListContainer;
