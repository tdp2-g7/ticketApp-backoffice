import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import { InfoOutlined } from '@mui/icons-material';
import COLORS from '../../helpers/colors';

export const Title = styled.p`
  font-size: 30px;
  margin: 0 0 0 3%;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${COLORS.darkViolet};
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin: 15px 0 15px 50px;
  font-weight: bold;
  color: ${COLORS.mineShaft};
  font-family: 'Poppins';
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GraphicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 10px;
`;

export const VisualizationTypeSelect = styled.select`
  background-color: ${COLORS.greyZyrcon};
  border-radius: 15px;
  border: 1px solid ${COLORS.greyZyrcon};
  padding: 4px 1px 4px 4px;
  font-size: 18px;
  font-family: 'Poppins';
  width: 120px;
  margin-left: 10px;
  cursor: pointer;
  color: #1d275f;

  > option {
    color: black;
  }
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StartCalendarContainer = styled.div`
  margin-left: 100px;
`;

export const Calendar = styled(ReactDatePicker)`
  height: 40px;
  width: 200px;
  border-radius: 10px;
  padding: 5px 5px 5px 15px;
  font-size: 20px;
  border: 1px solid #A6A6A6;

`;

export const EndCalendarContainer = styled.div`
  margin-left: 40px;
`;

export const InfoOutlinedIcon = styled(InfoOutlined)`
  margin-top: 4px;
`;
