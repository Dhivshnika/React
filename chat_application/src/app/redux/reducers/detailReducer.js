import * as actionTypes from '../actions/actionTypes';

const initialState = {};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_DETAILS:
            return action.payload;
        default:
            return state;
    }
}

export default detailReducer;
