import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const andrewReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ANDREW:
            return [...state, { chat: action.message, time: action.timeSent }];
        default:
            return state;
    }
}

export default andrewReducer;
