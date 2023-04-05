import { useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { IUsersList } from './types';
import { onGetAllUsers } from '../../redux/actions/user.actions';

const UsersList: FunctionComponent<IUsersList> = (/* props: IUsersList */) => {
  // const { users } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAllUsers());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre </th>
          <th>Cantidad de eventos creados</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>hola</td>
          <td>chau</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersList;
