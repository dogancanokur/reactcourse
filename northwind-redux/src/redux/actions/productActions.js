import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
    return {type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products};
}

export function getProducts(categoryId) {
    // apiye baglanmak için redux thunk
    return function (dispatch) {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += `?categoryId=${categoryId}`;
        }
        return fetch(url)
            .then(response => response.json()) // json formatında gelsede string olarak gelir
            .then(result => dispatch(getProductsSuccess(result))); // dispatch => yakalamak ele geçirmek
    }
}