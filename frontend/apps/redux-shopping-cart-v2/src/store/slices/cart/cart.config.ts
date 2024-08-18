export const SLICE_NAME = 'cart' as const;

export const CART_ACTIONS = {
    ADD_TO_CART: 'addToCart',
    REMOVE_FROM_CART: 'removeFromCart',
    CLEAR_CART: 'clearCart',
    INCREASE: 'increase',
    DECREASE: 'decrease',
    CALCULATE_TOTALS: 'calculateTotals',
    GET_CART_ITEMS: 'getCartItems',
} as const;
