import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IReportsByUserListProps, IReportsTable } from './types';
import { TableContainer, Title, ViewDescriptionButton } from './styles';
import { handleDate } from '../../helpers/time';
import { Modal } from '../../components/Modal/Modal';

/* eslint-disable */
const ReportsByUserList: FC<IReportsByUserListProps> = (props: IReportsByUserListProps) => {
  const { reports, showDescription, setShowDescription, setDescription, description, eventInfo } = props;
  
  const rows: IReportsTable[] = reports.map(e => {
    const { userId, user , date, description, reason } = e;

    let userName = user.name;
    const dateHandled = handleDate(date);

    return { userId, userName: userName, date: dateHandled, description, reason };
  });

  const columns = [
    {
      field: 'userId', headerName: 'ID', width: 250,
    },
    {
      field: 'userName', headerName: 'Nombre denunciante', width: 250,
    },
    {
      field: 'date', headerName: 'Fecha', width: 200,
    },
    {
      field: 'actions',
      headerName: 'Descripcion',
      width: 200,
      renderCell: (params: any) => (
        <ViewDescriptionButton onClick={() => { 
          setShowDescription(true);
          setDescription(params.row.description);
        }}>
          Ver descripcion
        </ViewDescriptionButton>
      ),
    },
    {
      field: 'reason', headerName: 'Razon', width: 450,
    },
  ];

  return (
    <>
      {showDescription ? (
        <Modal onClose={() => { setShowDescription(false) }} isOpen={true} title={'Descripcion de la denuncia'}> 
          {description}
        </Modal>
      ) : (
      <TableContainer>
        <Title>Denuncias a {eventInfo?.title}</Title>
        <DataGrid rows={rows} columns={columns} getRowId={(row) => row.userId } hideFooter={true}
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
      )}
  </>
  );
  /* eslint-enable */
};

export default ReportsByUserList;
