import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IOrganizersListProps } from './types';
import { IOrganizer } from '../../types/user.types';

const OrganizersList: FC<IOrganizersListProps> = (props: IOrganizersListProps) => {
  const { organizers } = props;

  const rows: IOrganizer[] = organizers;

  const columns = [
    {
      field: 'id', headerName: 'id', width: 50,
    },
    {
      field: 'name', headerName: 'Name', width: 600,
    },
    {
      field: 'number_of_events', headerName: 'events', width: 400,
    },

  ];

  const addIds = (r: IOrganizer[]): IOrganizer[] => r.map((row, idx) => ({ ...row, id: idx + 1 }));

  const rowsWithIds: IOrganizer[] = addIds(rows);

  console.log(organizers);

  return (
    <div style={{ height: 600, width: 1100 }}>
      <DataGrid rows={rowsWithIds} columns={columns} getRowId={(row) => row.id }/>
    </div>
  );
};

export default OrganizersList;
