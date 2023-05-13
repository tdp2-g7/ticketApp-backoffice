import styled from 'styled-components';
import COLORS from '../../helpers/colors';

export const ViewDescriptionButton = styled.div`
  text-align: center;
  margin: 0;
  color: ${COLORS.linkBlue};
  width: 100px;
  cursor: pointer;
`;

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
