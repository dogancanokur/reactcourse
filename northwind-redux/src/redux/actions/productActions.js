import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
    return {type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products};
}

export function createProductSuccess(product) {
    return {type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product};
}

export function updateProductSuccess(product) {
    return {type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product};
}

export function saveProductApi(product) {
    return fetch("http://localhost:3000/products/" + (product.id || ''), {
        method: product.id ? "PUT" : "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(product)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function saveProduct(product) {
    return function (dispatch) { // action un devreye girmesi icin
        saveProductApi(product)
            .then(savedProduct => {
                product.id ? dispatch(updateProductSuccess(savedProduct)) : dispatch(createProductSuccess(savedProduct));
            })
            .catch(error => {
                throw error
            });

    }
}

export async function handleResponse(response) {
    if (response.ok) {
        return response.json();
    }
    const error = await response.text()
    throw new Error(error);
}

export function handleError(error) {
    console.error("Error: " + error);
    throw error;
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