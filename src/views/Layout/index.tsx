import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { ILayoutProps } from './types';
import LogoImg from '../../assets/logo-sin-fondo.png';
import * as styles from './styles';
import { onLogout } from '../../redux/actions/user.actions';

const Layout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
  const { children, title } = props;
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(onLogout());
  };

  return (
    <>
      <div style={styles.containerStyles}>
        <div style={styles.sidebarStyles}>
          <div style={styles.logoContainer}>
            <img style={styles.Logo} src={LogoImg} alt='logo' />
          </div>
          <div style={styles.linksContainer}>
            <a style={styles.SidebarLink} href='/dashboard'>
              Inicio
            </a>{' '}
            <br />
            <a style={styles.SidebarLink} href='/'>
              Usuarios
            </a>{' '}
            <br />
            <a style={styles.SidebarLink} href='/organizers'>
              Organizadores
            </a>{' '}
            <br />
            <a style={styles.SidebarLink} href='/metrics'>
              Metricas
            </a>{' '}
            <br />
            <a style={styles.SidebarLink} href='/moderation'>
              Moderacion de usuarios
            </a>{' '}
            <br />
            <div style={styles.LogoutContainer}>
              <div style={styles.LogoutLink} onClick={() => onClickLogout()}>Salir</div>
            </div>
          </div>
        </div>
        <div style={styles.contentStyles}>
          <div style={styles.headerStyles}>{title}</div>
          <div style={styles.searchStyles}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
