import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
    return {type: actionTypes.CHANGE_CATEGORY, payload: category};
}

export function getCategoriesSuccess(categories) {
    return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories};
}

export function getCategories() {
    // apiye baglanmak için redux thunk
    return function (dispatch) {
        let url = "http://localhost:3000/categories";
        return fetch(url)
            .then(response => response.json()) // json formatında gelsede string olarak gelir
            .then(result => dispatch(getCategoriesSuccess(result))); // dispatch => yakalamak ele geçirmek
    }
}