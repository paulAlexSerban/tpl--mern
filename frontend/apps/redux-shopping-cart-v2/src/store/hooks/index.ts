import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState, AppStore } from '@/store';

// Custom hooks for Redux
type DispatchFunction = () => AppDispatch;
export const useAppDispatch: DispatchFunction = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = () => useStore<AppStore>();

/**
 * The useReduxContext custom hook helps with:
 * - Reduction of boilerplate code, especially when you have to use multiple parts of the Redux store in a component.
 * - Centralized access to the store, potentially reducing the likelihood of errors and making the code more maintainable.
 * - Simplified imports, requiring you to import only one hook instead of three.
 */
export const useReduxContext = () => {
    const store = useAppStore();
    const dispatch = useAppDispatch();
    const selector = useAppSelector;

    return { store, dispatch, selector };
};

// Selectors
export const cartSelector = (state: RootState) => state.cart;
export const modalSelector = (state: RootState) => state.modal;
