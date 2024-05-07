import * as actionTypes from './actionTypes';

export const addDetails = (receiverDetails) => {
    return {
        type: actionTypes.ADD_DETAILS,
        payload: { receiverDetails }
    };
}

export const addAndrew = (chat,time) => {
    return {
        type: actionTypes.ADD_ANDREW,
        chat,
        time
    };
}

export const addDavid = (chat,time) => {
    return {
        type: actionTypes.ADD_DAVID,
        chat,
        time
    };
}
