import styled from 'styled-components';
import { EventBusy } from '@mui/icons-material';
import COLORS from '../../helpers/colors';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 390px;
  height: 100%;
  width: 100%;
`;

export const EventBusyIcon = styled(EventBusy)`
  margin-top: 100px;
  transform: scale(3);
`;

export const EmptyTitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${COLORS.black};
`;
