import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from './actions';

import { TCartState, TCartAction, TCartItem } from './store.d';

const reducer = (state: TCartState, action: TCartAction) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() };
    }
    if (action.type === REMOVE) {
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id);
        return { ...state, cart: newCart };
    }
    if (action.type === INCREASE) {
        const newCart = new Map(state.cart);
        const itemId = action.payload.id;
        const item = newCart.get(itemId);
        if (!item) return state;
        const newItem = { ...item, amount: item.amount + 1 };
        newCart.set(itemId, newItem);
        return { ...state, cart: newCart };
    }
    if (action.type === DECREASE) {
        const newCart = new Map(state.cart);
        const itemId = action.payload.id;
        const item = newCart.get(itemId);
        if (!item) return state;
        if (item.amount === 1) {
            newCart.delete(itemId);
            return { ...state, cart: newCart };
        }

        const newItem = { ...item, amount: item.amount - 1 };
        newCart.set(itemId, newItem);
        return { ...state, cart: newCart };
    }
    if (action.type === LOADING) {
        return { ...state, loading: true };
    }
    if (action.type === DISPLAY_ITEMS) {
        const newCart = new Map(action.payload.cart.map((item: TCartItem) => [item.id, item]));
        return { ...state, loading: false, cart: newCart };
    }
    throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
