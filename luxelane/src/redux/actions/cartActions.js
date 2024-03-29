import * as actionTypes from './actionTypes';

export const addCart = (item) => {
    return {
        type: actionTypes.ADD_CART,
        payload: item
    };
}
export const addWish = (item) => {
    return {
        type: actionTypes.ADD_WISH,
        payload: item
    };
}
export const removeWish = (itemId) => {
    return {
        type: actionTypes.REMOVE_WISH,
        payload: itemId
    };
}

export const removeCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_CART,
        itemId: itemId
    };
}

export const quantityItem = (id, quantity) => {
    return {
        type: actionTypes.QUANTITY_ITEM,
        id,
        quantity
    };
}

