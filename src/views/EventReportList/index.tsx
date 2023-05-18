import { useState, FC } from 'react';
import { Field, Form } from 'react-final-form';
import { DataGrid } from '@mui/x-data-grid';
import 'react-datepicker/dist/react-datepicker.css';
import {
  IEventReportListProps,
  IEventReportRowsTable,
  IOrganizerReportRowsTable,
} from './types';
import {
  TableContainer,
  Title,
  FormContainer,
  RowContainer,
  FieldWrapper,
  CustomForm,
  Container,
  CustomInput,
  CustomDatePicker,
  FormWrapper,
  DatePickerWrapper,
  TitleContainer,
  EventWrapper,
  OrganizerWrapper,
  ButtonWrapper,
  FiltersButton,
} from './styles';
import { handleDate } from '../../helpers/time';

/* eslint-disable */
const EventReportList: FC<IEventReportListProps> = (
  props: IEventReportListProps
) => {
  const {
    eventReports,
    userReports,
    handleTableChange,
    organizerTitleColor,
    eventTitleColor,
    showOrganizerTable,
    handleFilters,
    setName,
    toDate,
    setToDate, 
    fromDate, 
    setFromDate,
  } = props;
  const [formValues, setFormValues] = useState<any>({});

  const organizerColumns = [
    {
      field: 'id',
      headerName: 'id',
      width: 50,
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 200,
    },
    {
      field: 'lastName',
      headerName: 'Apellido',
      width: 200,
    },
    {
      field: 'reporterName',
      headerName: 'Denunciante',
      width: 250,
    },
    {
      field: 'date',
      headerName: 'Fecha de denuncia',
      width: 250,
    },
    {
      field: 'description',
      headerName: 'Detalle',
      width: 400,
    },
  ];

  const eventColumns = [
    {
      field: 'id',
      headerName: 'id',
      width: 50,
    },
    {
      field: 'title',
      headerName: 'Evento',
      width: 250,
    },
    {
      field: 'reporterName',
      headerName: 'Denunciante',
      width: 250,
    },
    {
      field: 'date',
      headerName: 'Fecha de denuncia',
      width: 250,
    },
    {
      field: 'description',
      headerName: 'Detalle',
      width: 400,
    },
  ];

  const eventReportRows: IEventReportRowsTable[] = eventReports.map(
    (report) => {
      const { id, event, user, date, description } = report;

      const stringDate = handleDate(date);
      const reporterNameString = user.name + ' ' + user.lastName;

      return {
        id,
        title: event.title,
        reporterName: reporterNameString,
        date: stringDate,
        description,
      };
    }
  );

  const organizerReportRows: IOrganizerReportRowsTable[] = userReports.map(
    (report) => {
      const { id, organizer, user, date, description } = report;

      const stringDate = handleDate(date);
      const reporterNameString = user.name + ' ' + user.lastName;

      return {
        id,
        name: organizer.name,
        lastName: organizer.lastName,
        date: stringDate,
        description,
        reporterName: reporterNameString,
        title: user.name,
      };
    }
  );

  const onSubmit = async () => {
    handleFilters(showOrganizerTable);
  };

  const onHandleSubmit = () => {
    onSubmit();
  };

  return (
    <TableContainer>
      <TitleContainer>
        <OrganizerWrapper>
          <Title
            onClick={() => handleTableChange('organizer')}
            color={organizerTitleColor}
          >
            Organizadores
          </Title>
        </OrganizerWrapper>
        <EventWrapper>
          <Title
            onClick={() => handleTableChange('event')}
            color={eventTitleColor}
          >
            Eventos
          </Title>
        </EventWrapper>
      </TitleContainer>
      <FormContainer>
        <RowContainer>
          <DatePickerWrapper>
            <CustomDatePicker
              onChange={(date: any) => setFromDate(date)}
              selected={fromDate}
              className='datePicker'
              dateFormat='dd/MM/yyyy'
              placeholderText='Fecha de inicio'
              isClearable={true}
            />
          </DatePickerWrapper>
          <DatePickerWrapper>
            <CustomDatePicker
              onChange={(date: any) => setToDate(date)}
              selected={toDate}
              className='datePicker'
              dateFormat='dd/MM/yyyy'
              placeholderText='Fecha de finalizacion'
              isClearable={true}
            />
          </DatePickerWrapper>
          <FormWrapper>
            <Form
              onSubmit={onHandleSubmit}
              render={({ handleSubmit }) => (
              <CustomForm onSubmit={handleSubmit}>
                <Container>
                  <FieldWrapper>
                    <Field
                      component={CustomInput}
                      label='Name'
                      name='name'
                      type='input'
                      placeholder='Buscar por nombre'
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                    />
                  </FieldWrapper>
                  <ButtonWrapper>
                    <FiltersButton type='submit'>Filtrar</FiltersButton>
                  </ButtonWrapper>
                </Container>
              </CustomForm>
              )}
            />
          </FormWrapper>
        </RowContainer>
      </FormContainer>
      <DataGrid
        rows={showOrganizerTable ? organizerReportRows : eventReportRows}
        columns={showOrganizerTable ? organizerColumns : eventColumns}
        getRowId={(row) => row.id}
        hideFooter={true}
        localeText={{
          noRowsLabel: 'No hay filas que coincidan con la busqueda',
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

export default EventReportList;
