import { FunctionComponent } from 'react';
import TextField from '@mui/material/TextField';
import { ILayoutProps } from './types';
import LogoImg from '../../assets/logo-sin-fondo.png';
import * as styles from './styles';

const Layout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
  const { children } = props;

  return (
      <>
          <div style={styles.containerStyles}>
            <div style={styles.sidebarStyles}>
              <div style={styles.logoContainer}>
                <img style={styles.Logo} src={LogoImg} alt='logo' />
              </div>
              <div style={styles.linksContainer}>
                <a style={styles.SidebarLink} href='/createEvent'>Dashboard</a> <br/>
                <a style={styles.SidebarLink} href='/agenda'>Users</a> <br/>
                <a style={styles.SidebarLink} href='/metrics'>Metrics</a> <br/>
                <a style={styles.SidebarLink} href='/profile'>Moderation of users</a> <br />
              </div>
            </div>
            <div style={styles.contentStyles}>
              <div style={styles.headerStyles}>Usuarios</div>
              <div style={styles.searchStyles}>
                <div style={styles.textFieldStyles}>
                  <TextField
                    label="Buscar usuario"
                    variant="outlined"
                    size="small"
                  />
                </div>
                {children}
              </div>
            </div>
          </div>
      </>
  );
};

export default Layout;
