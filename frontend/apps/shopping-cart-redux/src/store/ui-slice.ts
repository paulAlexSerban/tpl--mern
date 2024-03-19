import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UiState = { cartIsVisible: boolean; notification: { status: string; title: string; message: string } | null };
const initialState: UiState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action: PayloadAction<{ status: string; title: string; message: string }>) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const { toggle, showNotification } = uiSlice.actions;

export default uiSlice.reducer;
