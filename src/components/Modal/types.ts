import { Sizes } from '../../helpers/sizes';

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  size?: Sizes;
}

export interface IModalStyledProps {
  size: Sizes;
}
