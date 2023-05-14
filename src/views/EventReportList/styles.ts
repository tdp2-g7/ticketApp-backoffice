import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import COLORS from '../../helpers/colors';

export const TableContainer = styled.div`
  margin-top: 1%;
  margin-left: 3%;
  height: 800px;
  width: 90%;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: ${COLORS.darkViolet};
`;

export const FormContainer = styled.div`
  margin: 20px -0.5%;
  border-color: ${COLORS.black};
  width: 80%;
  border-radius: 10px;
  padding: 0 10px 10px 10px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
`;

export const CustomForm = styled.form`
  line-height: 2rem;
  font-size: 17px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

export const CustomCalendarForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const DatePickerWrapper = styled.div`
  margin-right: 10px;
`;

export const FieldWrapper = styled.div`
  margin-left: 10px;
`;

export const CustomDatePicker = styled(ReactDatePicker)`
  width: 100%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const CustomInput = styled.input`
  width: 250%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
