import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const wishReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_WISH:
            const itemExists = state.some(item => item.id === action.payload.id);
            if (!itemExists) {
                return [...state, action.payload];
            }
            return state.filter(item => item.id !== action.payload.id);
        case actionTypes.REMOVE_WISH:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}
export default wishReducer;