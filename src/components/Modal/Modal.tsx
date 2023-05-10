import { FunctionComponent } from 'react';
import { Sizes } from '../../helpers/sizes';
import { ModalProps } from './types';
import {
  CustomModal, CustomCloseIcon, ModalHeader, Title,
} from './styles';

export const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    children, onClose, isOpen, size = Sizes.medium,
  } = props;

  const customStyles = {
    overlay: { zIndex: 1000 },
  };

  return (
        <CustomModal
            isOpen={isOpen}
            ariaHideApp={false}
            style={customStyles}
            size={size}
        >
            <ModalHeader>
                <Title>Descripcion de la denuncia</Title>
                <CustomCloseIcon onClick={onClose} />
            </ModalHeader>
            {children}
        </CustomModal>
  );
};
