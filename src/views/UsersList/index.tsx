import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IUsersListProps } from './types';
import { IUser } from '../../types/user.types';
import { ReportsButton, TableContainer, Title } from './styles';

const UsersList: FC<IUsersListProps> = (props: IUsersListProps) => {
  const { users, getReportsById } = props;

  const columns = [
    {
      field: 'userId', headerName: 'id', width: 50,
    },
    {
      field: 'name', headerName: 'Nombre', width: 250,
    },
    {
      field: 'lastName', headerName: 'Apellido', width: 250,
    },
    {
      field: 'email', headerName: 'Correo electronico', width: 250,
    },
    {
      field: 'reports_nr', headerName: 'Cantidad denuncias', width: 150,
    },
    {
      field: 'actions',
      headerName: '',
      width: 200,
      renderCell: (params: any) => (
        <ReportsButton onClick={() => getReportsById(params.row.userId)}>
          Ver denuncias
        </ReportsButton>
      ),
    },
  ];

  const rows: IUser[] = users;
  const addRowIds = (r: IUser[]): IUser[] => r.map((row, index) => ({ ...row, id: index + 1 }));
  const rowsWithIds: IUser[] = addRowIds(rows);

  /* eslint-disable */
  return (
    <TableContainer>
      <Title>Usuarios</Title>
      <DataGrid rows={rowsWithIds} columns={columns} hideFooter={true}
                localeText = {{ columnMenuSortDesc: 'Ordenar DESC',
                              columnMenuSortAsc: 'Ordenar ASC',
                              columnMenuFilter: 'Filtrar',
                              columnMenuHideColumn: 'Ocultar columna',
                              columnMenuManageColumns: 'Administrar columnas',
                              columnMenuUnsort: 'Desordenar',
                              filterPanelAddFilter: 'Agregar filtro',
                              filterPanelRemoveAll: 'Eliminar todos',
                              filterPanelDeleteIconLabel: 'Eliminar',
                              filterPanelLogicOperator: 'Operador logico',
                              filterPanelOperator: 'Operador',
                              filterPanelOperatorAnd: 'Y',
                              filterPanelOperatorOr: 'O',
                              filterPanelColumns: 'Columnas',
                              filterPanelInputLabel: 'Valor',
                              filterPanelInputPlaceholder: 'Valor del filtro',
                              filterOperatorContains: 'contiene',
                              filterOperatorEquals: 'igual a',
                              filterOperatorStartsWith: 'comienza por',
                              filterOperatorEndsWith: 'termina con',
                              filterOperatorIs: 'es',
                              filterOperatorNot: 'no es',
                              filterOperatorAfter: 'está despues de',
                              filterOperatorOnOrAfter: 'está en o está despues de',
                              filterOperatorBefore: 'está antes de',
                              filterOperatorOnOrBefore: 'está en o está antes de',
                              filterOperatorIsEmpty: 'es vacio',
                              filterOperatorIsNotEmpty: 'no está vacio',
                              filterOperatorIsAnyOf: 'contiene al menos',
                              columnsPanelTextFieldLabel: 'Encontrar columna',
                              columnsPanelTextFieldPlaceholder: 'Titulo de columna',
                              columnsPanelDragIconLabel: 'Reordenar columna',
                              columnsPanelShowAllButton: 'Mostrar todas',
                              columnsPanelHideAllButton: 'Ocultar todas',
                             }}
      />
    </TableContainer>
  );
  /* eslint-enable */
};

export default UsersList;
