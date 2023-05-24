import styled from 'styled-components';
import COLORS from '../../helpers/colors';

export const ReportsButton = styled.div`
  text-align: center;
  margin: 0;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${COLORS.violetScampi};
  color: ${COLORS.black};
  font-weight: bold;
  width: 100px;
  padding: 8px;
  cursor: pointer;
`;

export const TableContainer = styled.div`
    margin-top: 1%;
    margin-left: 3%;
    height: 800px;
    width: 95%;
`;

export const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: ${COLORS.darkViolet};
`;

export const BlockButton = styled.div`
  text-align: center;
  margin: 0 10px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${COLORS.violetScampi};
  color: ${COLORS.black};
  font-weight: bold;
  width: 100px;
  padding: 8px;
  cursor: pointer;
`;
