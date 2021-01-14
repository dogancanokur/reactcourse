import * as actionTypes from './actionTypes';

export const increaseCounter = () => (
// değişkene fonksiyon atıyoruz
    { // parametreleri bunlar
        type: actionTypes.INCREASE_COUNTER, // event türü
        payload: 1 // data
    }
);

export const decreaseCounter = () => ({
    type: actionTypes.DECREASE_COUNTER,
    payload: -1
});

export const increaseByTwoCounter = () => ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2
});