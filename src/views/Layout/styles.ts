import { CSSProperties } from 'react';
import COLORS from '../../helpers/colors';

export const containerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  width: '100%',
};

export const contentStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
};

export const headerStyles: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '28px',
  margin: 0,
  marginTop: '50px',
  marginBottom: '0px',
  marginLeft: '75px',
  padding: '10px',
  display: 'flex',
  justifyContent: 'left',
  width: '100%',
  boxSizing: 'border-box',
};

export const searchStyles: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  boxSizing: 'border-box',
};

export const SidebarLink: CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  textDecoration: 'none',
  width: '150px',
  fontSize: '22px',
  border: 'none',
  marginTop: '10px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: `${COLORS.white}`,
  textAlign: 'center',
};

export const sidebarStyles: CSSProperties = {
  backgroundColor: 'violet',
  width: '225px',
  minHeight: '100vh',
  background: 'linear-gradient(118.98deg, #ED4690 -2.11%, #5522CC 63.58%)',
  mixBlendMode: 'normal',
  opacity: 0.9,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const Logo: CSSProperties = {
  marginTop: '5px',
  width: '225px',
  height: '100px',
};

export const logoContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '30px',
  marginTop: '-370px',
};

export const linksContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const LogoutContainer: CSSProperties = {
  border: `1px solid ${COLORS.white}`,
  borderRadius: '25px',
  padding: '10px 20px',
};

export const LogoutLink: CSSProperties = {
  textDecoration: 'none',
  fontSize: '18px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: `${COLORS.white}`,
};
