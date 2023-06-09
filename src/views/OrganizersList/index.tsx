import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IOrganizersListProps } from './types';
import { IOrganizerTable } from '../../types/user.types';
import { BlockButton, TableContainer, Title } from './styles';
import { globalNavigate } from '../../helpers/history';
import { Modal } from '../../components/Modal/Modal';

const OrganizersList: FC<IOrganizersListProps> = (
  props: IOrganizersListProps,
) => {
  const {
    organizers, onChangeBlock, showModal, setShowModal,
  } = props;

  const rows: IOrganizerTable[] = organizers.map((organizer) => ({
    userId: organizer.userId,
    name: organizer.name,
    lastName: organizer.lastName,
    email: organizer.email,
    blockedDate: organizer.blockedDate,
    stateText: organizer.blockedDate ? 'Bloqueado' : 'Activo',
    state: organizer.state,
  }));

  const columns = [
    {
      field: 'userId',
      headerName: 'ID',
      width: 250,
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 250,
    },
    {
      field: 'email',
      headerName: 'Correo electronico',
      width: 400,
    },
    {
      field: 'stateText',
      headerName: 'Estado',
      width: 200,
    },
    {
      field: 'block',
      headerName: '',
      width: 400,
      renderCell: (params: any) => (
        <>
          <BlockButton onClick={() => {
            if (params.row.reports_nr !== 0) {
              globalNavigate(`/events?organizerId=${params.row.userId}`);
            } else {
              setShowModal(true);
            }
          }}>
            Ver eventos
          </BlockButton>

          <BlockButton onClick={() => onChangeBlock(params.row.userId)}>
            {params.row.blockedDate ? 'Desbloquear' : 'Bloquear'}
          </BlockButton>
        </>
      ),
    },
  ];

  /* eslint-disable */
  return (
    <>
      {showModal ? (
        <Modal onClose={() => { setShowModal(false) }} isOpen={true} title={'Solicitud invalida'}>
          El organizador que ha seleccionado no tiene eventos.
        </Modal>
    ) : (
    <TableContainer>
      <Title>Organizadores</Title>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.userId}
        hideFooter={true}
        localeText={{
          noRowsLabel: 'Cargando organizadores...',
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
    )}
    </>
  );
  /* eslint-enable */
};

export default OrganizersList;
