import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IReportsByUserListProps } from './types';
import { IReport } from '../../types/user.types';
import { TableContainer, Title } from './styles';
import { handleDate } from '../../helpers/time';

const ReportsByUserList: FC<IReportsByUserListProps> = (props: IReportsByUserListProps) => {
  const { reports } = props;
  const rows: IReport[] = reports;
  const rowsWithDateString = rows.map((report) => ({
    ...report,
    date: handleDate(report.date),
  }));

  const columns = [
    {
      field: 'id', headerName: 'id', width: 50,
    },
    {
      field: 'eventId', headerName: 'id evento', width: 50,
    },
    {
      field: 'date', headerName: 'Fecha', width: 400,
    },
    {
      field: 'description', headerName: 'Descripcion', width: 400,
    },
    {
      field: 'reason', headerName: 'Razon', width: 400,
    },
  ];

  /* eslint-disable */
  return (
    <TableContainer>
      <Title>Denuncias</Title>
      <DataGrid rows={rowsWithDateString} columns={columns} getRowId={(row) => row.id } hideFooter={true}
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

export default ReportsByUserList;
