import { useState, FC } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Field, Form } from 'react-final-form';
import { DataGrid } from '@mui/x-data-grid';
import { IEventReportListProps, IFormData } from './types';
import { IReport } from '../../types/user.types';
import {
  TableContainer, Title, FormContainer, RowContainer, FieldWrapper,
  CustomForm, Container, CustomInput, /* CustomDatePicker, */
  CustomCalendarForm, DatePickerWrapper,
} from './styles';

const EventReportList: FC<IEventReportListProps> = (props: IEventReportListProps) => {
  const { reports, setEventName } = props;

  const [formValues, setFormValues] = useState<any>({});

  console.log(reports);

  const onSubmit = async (formData: IFormData) => {
    console.log('================', formValues);
    console.log(formData);
  };

  const onHandleSubmit = (formData: IFormData) => {
    onSubmit(formData);
  };

  const setReserveDate = (data: any) => {
    console.log(data);
  };

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
  ];

  const rows: IReport[] = reports;
  // const addRowIds = (r: IReport[]): IReport[] => r.map((row, index)
  // => ({ ...row, id: index + 1 }));
  // const rowsWithIds: IReport[] = addRowIds(rows);

  /* eslint-disable */
  return (
      <TableContainer>
        <Title>Eventos</Title>
        <FormContainer>
          <Form
            onSubmit={onHandleSubmit}
            render={({ handleSubmit, form }) => {
              setFormValues(form.getState().values);
              return (
                <CustomForm onSubmit={handleSubmit}>
                  <Container>
                    <RowContainer>
                      <CustomCalendarForm>
                        <DatePickerWrapper>
                          <ReactDatePicker onChange={(date: any) => setReserveDate(date)} isClearable={true}
                                           className='datePicker' dateFormat='dd/MM/yyyy' 
                                           placeholderText='Seleccionar fecha'/>
                        </DatePickerWrapper>
                        <DatePickerWrapper>                                           
                          <ReactDatePicker onChange={(date: any) => setReserveDate(date)} 
                                           className='datePicker' dateFormat='dd/MM/yyyy' 
                                           placeholderText='Seleccionar fecha'/>
                        </DatePickerWrapper>
                      </CustomCalendarForm>
                      <FieldWrapper>
                        <Field component={CustomInput} label='Descripcion' name='description' 
                               type='input' placeholder='Buscar por nombre'
                               onChange={(date: any) => setEventName(date)}/>
                      </FieldWrapper>
                    </RowContainer>
                  </Container>
                </CustomForm>
              );
            }}
          />
      </FormContainer>
      <DataGrid rows={rows} columns={columns} hideFooter={true}
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

export default EventReportList;
