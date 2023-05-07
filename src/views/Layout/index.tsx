import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { ILayoutProps } from './types';
import LogoImg from '../../assets/logo-sin-fondo.png';
import { globalNavigate } from '../../helpers/history';
import { onLogout } from '../../redux/actions/user.actions';
import {
  TopNav,
  Logo,
  RowDiv,
  RightContainer,
  HeaderLink,
  LogoutContainer,
  CreateEventLink,
  LogoutLink,
} from './styles';

const Layout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(onLogout());
  };

  return (
    <>
    <TopNav>
      <RowDiv onClick={() => globalNavigate('/')}>
        <Logo src={LogoImg} alt='logo' />
      </RowDiv>
      <RightContainer>
        <CreateEventLink onClick={() => globalNavigate('/')}>
          Inicio
        </CreateEventLink>
        <HeaderLink onClick={() => globalNavigate('/users')}>
          Usuarios
        </HeaderLink>
        <HeaderLink onClick={() => globalNavigate('/organizers')}>
          Organizadores
        </HeaderLink>
        <HeaderLink onClick={() => globalNavigate('/events')}>
          Eventos
        </HeaderLink>
        <HeaderLink onClick={() => globalNavigate('/metrics')}>
          Metricas
        </HeaderLink>
        <HeaderLink onClick={() => globalNavigate('/moderation')}>
          Moderacion
        </HeaderLink>
        <LogoutContainer>
          <LogoutLink onClick={() => onClickLogout()}>Salir</LogoutLink>
        </LogoutContainer>
      </RightContainer>
    </TopNav>
    {children}
  </>
  );
};

export default Layout;
