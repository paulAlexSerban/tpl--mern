import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from '@/types.d';

import { MODAL_ACTIONS } from '@/store/slices/modal/modal.actions';
import * as modalReducer from '@/store/slices/modal/modal.reducer.function';

const initialState: ModalState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        [MODAL_ACTIONS.OPEN_MODAL]: modalReducer.openModal,
        [MODAL_ACTIONS.CLOSE_MODAL]: modalReducer.closeModal,
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
