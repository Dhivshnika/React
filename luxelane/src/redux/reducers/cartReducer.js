import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART:
            const itemExists = state.some(item => item.id === action.payload.id);
            if (itemExists) return state;
            return [...state, action.payload];
        case actionTypes.REMOVE_CART:
            return state.filter(item => item.id !== action.payload.id);
        case actionTypes.QUANTITY_ITEM:
            return state.map(item => item.id === action.id ? { ...item, quantity: action.quantity } : item);
        default:
            return state;
    }
}
export default cartReducer;