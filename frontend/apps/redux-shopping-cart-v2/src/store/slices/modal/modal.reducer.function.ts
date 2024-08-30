import { type ModalState } from '@/types';

export const openModal = (state: ModalState) => {
    state.isOpen = true;
};

export const closeModal = (state: ModalState) => {
    state.isOpen = false;
};
