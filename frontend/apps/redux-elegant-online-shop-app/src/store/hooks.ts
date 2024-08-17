import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';

type DispatchFunction = () => AppDispatch;
export const useCartDispatch: DispatchFunction = () => useDispatch<AppDispatch>();

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
