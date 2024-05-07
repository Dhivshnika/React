import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const davidReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_DAVID:
            return [...state, { chat: action.message, time: action.timeSent }];
        default:
            return state;
    }
}

export default davidReducer;
