import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IOrganizersListProps } from './types';
import { IOrganizer } from '../../types/user.types';
import { BlockButton, TableContainer, Title } from './styles';
import { globalNavigate } from '../../helpers/history';

const OrganizersList: FC<IOrganizersListProps> = (
  props: IOrganizersListProps,
) => {
  const { organizers, onChangeBlock } = props;
  const rows: IOrganizer[] = organizers;

  const columns = [
    {
      field: 'userId',
      headerName: 'Id',
      width: 50,
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 300,
    },
    {
      field: 'lastName',
      headerName: 'Apellido',
      width: 300,
    },
    {
      field: 'email',
      headerName: 'Correo electronico',
      width: 250,
    },
    {
      field: 'block',
      headerName: '',
      width: 400,
      renderCell: (params: any) => (
        <>
          <BlockButton onClick={() => globalNavigate(`/events?organizerId=${params.row.userId}`)}>
            Ver eventos
          </BlockButton>

          <BlockButton onClick={() => onChangeBlock(params.row.userId)}>
            {params.row.isBlocked ? 'Desbloquear' : 'Bloquear'}
          </BlockButton>
        </>
      ),
    },
  ];

  const addIds = (r: IOrganizer[]): IOrganizer[] => r.map((row, idx) => ({ ...row, id: idx + 1 }));

  const rowsWithIds: IOrganizer[] = addIds(rows);

  /* eslint-disable */
  return (
    <TableContainer>
      <Title>Organizadores</Title>
      <DataGrid
        rows={rowsWithIds}
        columns={columns}
        getRowId={(row) => row.userId}
        hideFooter={true}
        localeText={{
          columnMenuSortDesc: 'Ordenar DESC',
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

export default OrganizersList;
