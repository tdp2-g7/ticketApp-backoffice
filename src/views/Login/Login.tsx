import React, { FunctionComponent } from 'react';
import { Form, Field } from 'react-final-form';
import FacebookImg from '../../assets/facebook.png';
import TwitterImg from '../../assets/twitter.png';
import LinkeInImg from '../../assets/linkedIn.png';
import LogoImg from '../../assets/logo.png';
import { ILoginProps } from './types';
import {
  Button,
  ButtonContainer,
  CenterContainer,
  CustomForm,
  EndRowContainer,
  Icons,
  IconsContainer,
  InfoContainer,
  InfoText,
  LoginDiv,
  Logo,
  RowContainer,
  Subtitle,
  SubtitleBold,
  Title,
} from './styles';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';

const Login: FunctionComponent<ILoginProps> = (props: ILoginProps) => {
  const { onLoginClick } = props;
  return (
    <LoginDiv>
      <Logo src={LogoImg} alt='logo' />
      <CenterContainer>
        <Title>¡Bienvenido de nuevo!</Title>

        <Form
                onSubmit={onLoginClick}
                initialValues={{}}
                render={({ handleSubmit }) => (
                    <CustomForm onSubmit={handleSubmit}>
                        <div>
                            <label>Mail </label>
                            <Field
                                render={Input}
                                label="Mail"
                                name="email"
                                validate={requiredValidation}
                                type="email"
                            />
                        </div>
                        <div>
                            <label>Contraseña </label>
                            <Field
                                render={Input}
                                label="Contraseña"
                                name="password"
                                validate={requiredValidation}
                                type="password"
                            />
                        </div>
                        <ButtonContainer>
                            <Button type="submit">Iniciar sesion</Button>
                        </ButtonContainer>
                    </CustomForm>
                )}
            />
      </CenterContainer>
      <EndRowContainer>
        <InfoContainer>
          <RowContainer>
            <SubtitleBold>Ticket</SubtitleBold>
            <Subtitle>app</Subtitle>
          </RowContainer>
          <InfoText>
            Ticketapp es una plataforma global de venta de entradas de
            autoservicio para experienciasen vivo que permite a cualquier
            persona crear, compartir, encontrar y asistir a eventos que
            alimentan sus pasiones y enriquecen sus vidas
          </InfoText>
        </InfoContainer>
        <IconsContainer>
          <Icons src={FacebookImg} />
          <Icons src={TwitterImg} />
          <Icons src={LinkeInImg} />
        </IconsContainer>
      </EndRowContainer>
    </LoginDiv>
  );
};

export default Login;
