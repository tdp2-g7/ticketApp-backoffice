import { FunctionComponent } from 'react';
import TextField from '@mui/material/TextField';
import UsersList from '../views/UsersList';

const UsersListContainer: FunctionComponent = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  }}>
    <div style={{
      backgroundColor: 'violet',
      width: '250px',
      minHeight: '100vh',
    }}></div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    }}>
      <div style={{
        fontWeight: 'bold',
        fontSize: '24px',
        margin: 0,
        marginTop: '100px',
        marginBottom: '0px',
        marginLeft: '52px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'left',
        width: '100%',
        boxSizing: 'border-box',
      }}>Usuarios</div>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'left',
          marginBottom: '10px',
          marginLeft: '53px',
        }}>
          <TextField
            label="Buscar usuario"
            variant="outlined"
            size="small"
          />
        </div>
        <UsersList />
      </div>
    </div>
  </div>
);

export default UsersListContainer;
