import styled from 'styled-components';
import COLORS from '../../helpers/colors';

export const Title = styled.p`
  font-size: 30px;
  margin: 18px 0 0 3%;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${COLORS.darkViolet};
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin: 15px 0 15px 70px;
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
  grid-column-gap: 10px;
  grid-row-gap: 20px;
`;

export const VisualizationTypeSelect = styled.select`
  background-color: ${COLORS.greyZyrcon};
  border-radius: 15px;
  border: 1px solid ${COLORS.greyZyrcon};
  padding: 4px 1px 4px 4px;
  font-size: 18px;
  font-family: 'Poppins';
  width: 100px;
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
