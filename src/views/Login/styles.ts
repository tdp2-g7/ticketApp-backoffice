import styled from 'styled-components';
import COLORS from '../../helpers/colors';

export const LoginDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    166deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(237, 70, 144, 1) 0%,
    rgba(85, 34, 204, 1) 61%
  );
`;

export const Logo = styled.img`
  margin: 15px 0 0 15px;
  width: 200px;
  height: auto;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Poppins';
  color: ${COLORS.white};
`;

export const EndRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  margin: 0 0 15px 15px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubtitleBold = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: ${COLORS.white};
  font-family: 'Poppins';
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 22px;
  color: ${COLORS.white};
  font-family: 'Poppins';
`;

export const InfoText = styled.p`
  margin: 20px 0;
  font-size: 16px;
  color: ${COLORS.white};
  font-family: 'Poppins';
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin: 0 15px 15px 0;
`;

export const Icons = styled.img`
  width: auto;
  height: 40px;
  margin-right: 5px;
`;

export const CustomForm = styled.form`
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    margin-top: 2%;

    & > div {
      width: 500px;
    }
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 10px 0 0;
`;

export const Button = styled.button`
  padding: 7px 30%;
  font-size: 16px;
  border: none;
  font-weight: bold ;
  border-radius: 8px;
  margin: 0 0 15px 0;
  cursor: pointer;
  background-color: ${COLORS.violetRed};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.violetPigment};
  }
`;
