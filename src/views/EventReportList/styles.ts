import styled, { css } from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import COLORS from '../../helpers/colors';
import { ITitleProps } from './types';

export const TableContainer = styled.div`
  margin-top: 1%;
  margin-left: 3%;
  height: 800px;
  width: 90%;
`;

export const Title = styled.p<ITitleProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;

  ${({ color }) => color
  && css`
    color: ${color}
  `}

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

export const CustomDatePicker = styled(ReactDatePicker)`
  width: 100%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const CustomInput = styled.input`
  width: 1400%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const OrganizerWrapper = styled.div`
  margin-right: 10px;
`;

export const EventWrapper = styled.div`
  margin-left: 10px;
`;

export const ButtonWrapper = styled.div`
  margin-left: 700px;
`;

export const FiltersButton = styled.button`
  font-size: 20px;
  width: 200%;
  border-radius: 30px;
  margin-top: 10px;
  font-family: 'Poppins';
  cursor: pointer;
  border: 1px solid ${COLORS.darkViolet};
  color: ${COLORS.darkViolet};
  background-color: ${COLORS.white};
`;

export const FormContainer = styled.div`
  margin: 20px -0.5%;
  border-color: ${COLORS.black};
  width: 80%;
  border-radius: 10px;
  padding: 0 10px 10px 10px;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
    margin-right: 10px;
  }

  > :last-child {
    margin-right: 0;
  }
`;

export const CustomCalendarForm = styled(Flex)`
  align-items: center;
`;

export const DatePickerWrapper = styled.div`
  flex: 1;
`;

export const FieldWrapper = styled.div`
  flex: 1;
`;

export const FormWrapper = styled.div`
  flex: 1;
`;
