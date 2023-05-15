import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IEventListProps } from './types';
import { IEventTable } from '../../types/event.types';
import {
  TableContainer, Title, ReportsButton, BlockButton,
} from './styles';
import { handleTime, handleDate } from '../../helpers/time';
import { State, handleStateText } from '../../helpers/state';
import { Modal } from '../../components/Modal/Modal';
import Loading from '../../components/Loading/Loading';

const EventList: FC<IEventListProps> = (props: IEventListProps) => {
  const {
    events,
    getReportsById,
    organizerData,
    showModal,
    setShowModal,
    onChangeBlock,
    loading,
  } = props;

  const columns = [
    {
      field: 'eventId',
      headerName: 'ID',
      width: 100,
    },
    {
      field: 'title', headerName: 'Titulo', width: 300,
    },
    {
      field: 'date',
      headerName: 'Fecha',
      width: 150,
    },
    {
      field: 'startTime',
      headerName: 'Hora de inicio',
      width: 150,
    },
    {
      field: 'reports_nr', headerName: 'Cantidad de denuncias', width: 200,
    },
    {
      field: 'state', headerName: 'Estado', width: 100,
    },
    {
      field: 'actions',
      headerName: '',
      width: 350,
      renderCell: (params: any) => (
        <>
          <ReportsButton
            onClick={() => {
              if (params.row.reports_nr !== '0') {
                getReportsById(params.row.eventId);
              } else {
                setShowModal(true);
              }
            }}
          >
            Ver denuncias
          </ReportsButton>

          <BlockButton onClick={() => onChangeBlock(params.row.eventId)}>
            {params.row.state === State.BLOCKED ? 'Desbloquear' : 'Bloquear'}
          </BlockButton>
        </>
      ),
    },
  ];

  /* eslint-disable */

  const rows: IEventTable[] = events.map(event => {
    const { eventId, title, date, startTime, reports_nr, state } = event;
    
    const stringDate = handleDate(date);
    let stringStartTime = ' - ';
    if (startTime) stringStartTime = handleTime(startTime);

    const stringState = handleStateText(state);
    const reports_nrText = reports_nr.toString();
    
    return { eventId, title, date: stringDate, startTime: stringStartTime, reports_nr: reports_nrText, state: stringState};
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
      <>
        {showModal ? (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
            isOpen={true}
            title={'Solicitud invalida'}
          >
            El evento que ha seleccionado no tiene denuncias.
          </Modal>
        ) : (
          <TableContainer>
            <Title>
              {organizerData && organizerData[0].name
                ? `Eventos de ${organizerData[0].name}`
                : 'Eventos'}{' '}
            </Title>
            <DataGrid
              rows={rows}
              columns={columns}
              getRowId={(row) => row.eventId}
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
      )}
    </>
  );
  /* eslint-enable */
};

export default EventList;
