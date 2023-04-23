import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IUsersListProps } from './types';
import { IUser } from '../../types/user.types';

const UsersList: FC<IUsersListProps> = (props: IUsersListProps) => {
  const { users } = props;

  const rows: IUser[] = users;

  const columns = [
    {
      field: 'id', headerName: 'id', width: 50,
    },
    {
      field: 'name', headerName: 'Name', width: 600,
    },
  ];

  const addRowIds = (r: IUser[]): IUser[] => r.map((row, index) => ({ ...row, id: index + 1 }));

  const rowsWithIds: IUser[] = addRowIds(rows);

  return (
    <div style={{ height: 600, width: 1100 }}>
      <DataGrid rows={rowsWithIds} columns={columns} getRowId={(row) => row.id }/>
    </div>
  );
};

export default UsersList;
