import { FunctionComponent } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const UsersList: FunctionComponent = () => {
  const rows = [
    {
      id: 1, name: 'Juan Vercellino', events: 32,
    },
    {
      id: 2, name: 'Lourdes Lopez Nastri', events: 27,
    },
    {
      id: 3, name: 'Lucas Romero', events: 8,
    },
    {
      id: 4, name: 'Jose Pedro Varela', events: 1,
    },
    {
      id: 5, name: 'Luis Salmeron', events: 11,
    },
    {
      id: 6, name: 'Agustin Marchesin', events: 2,
    },
  ];

  const columns = [
    {
      field: 'id', headerName: 'ID', width: 100,
    },
    {
      field: 'name', headerName: 'Name', width: 550,
    },
    {
      field: 'events', headerName: 'Events', width: 350,
    },
  ];

  return (
    <div style={{ height: 500, width: 1100, marginLeft: '-40px' }}>
      <DataGrid rows={rows} columns={columns}/>
    </div>
  );
};

export default UsersList;
