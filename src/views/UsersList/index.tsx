import { FunctionComponent } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const UsersList: FunctionComponent = () => {
  const rows = [
    {
      id: 1, name: 'Juan', lastName: 'Lopez', age: 32,
    },
    {
      id: 2, name: 'Maria', lastName: 'Gutierrez', age: 27,
    },
    {
      id: 3, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 4, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 5, name: 'Lucas', lastName: 'Lopez', age: 45,
    },
    {
      id: 6, name: 'Lucas', lastName: 'Lopez', age: 45,
    },
    {
      id: 7, name: 'Lucas', lastName: 'Lopez', age: 45,
    },
    {
      id: 8, name: 'Lucas', lastName: 'Lopez', age: 45,
    },
    {
      id: 9, name: 'Lucas', lastName: 'Lopez', age: 45,
    },
    {
      id: 10, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 11, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 12, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 13, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 14, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 15, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 16, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
    {
      id: 17, name: 'Lucas', lastName: 'Gutierrez', age: 45,
    },
  ];

  const columns = [
    {
      field: 'id', headerName: 'ID', width: 90,
    },
    {
      field: 'name', headerName: 'Nombre', width: 300,
    },
    {
      field: 'lastName', headerName: 'Apellido', width: 300,
    },
    {
      field: 'age', headerName: 'Edad', width: 300,
    },
  ];

  return (
    <div style={{ height: 500, width: 1100, marginLeft: '-40px' }}>
      <DataGrid rows={rows} columns={columns}/>
    </div>
  );
};

export default UsersList;
