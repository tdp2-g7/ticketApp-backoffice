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

  const columns = [
    {
      field: 'userId',
      headerName: 'Id',
      width: 50,
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 250,
    },
    {
      field: 'lastName',
      headerName: 'Apellido',
      width: 250,
    },
    {
      field: 'email',
      headerName: 'Correo electronico',
      width: 275,
    },
    {
      field: 'state',
      headerName: 'Estado',
      width: 100,
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
            {params.row.isBlocked ? 'Desbloquear' : 'Bloquear'}
          </BlockButton>
        </>
      ),
    },
  ];

  /* eslint-disable */

  const rows: IOrganizerTable[] = organizers.map(organizer => {
    const { 
      userId, name, lastName, email, isBlocked 
    } = organizer;
    
    let auxState = '';

    if (isBlocked) {
      auxState = 'Bloqueado'
    } else {
      auxState = 'Activo'
    }
    
    return { userId, name, lastName, email, state: auxState};
  });

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
