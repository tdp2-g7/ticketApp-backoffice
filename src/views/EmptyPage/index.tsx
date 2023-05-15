import { FC } from 'react';
import { EmptyContainer, EventBusyIcon, EmptyTitle } from './styles';

/* eslint-disable */
const EmptyPage: FC = () => {
  return (
    <>
      <EmptyContainer>
          <EventBusyIcon />
          <EmptyTitle> No hay eventos disponibles </EmptyTitle>
        </EmptyContainer>
    </>
  );
  
};
/* eslint-enable */

export default EmptyPage;
