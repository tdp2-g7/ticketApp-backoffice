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
