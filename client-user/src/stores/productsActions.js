import { ActionTypes } from "./actionType";
import { createBrowserHistory } from "history";
import { redirect } from "react-router-dom";
const url = `https://superindo-production.up.railway.app`;
const history = createBrowserHistory();

export const fetchProduct = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(url + "/customer/products");
            const responseJSON = await response.json();
            dispatch({
                type: ActionTypes.FETCH_PRODUCTS,
                payload: responseJSON,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchDetailProduct = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url + "/customer/products/" + id);
            const responseJSON = await response.json();
            dispatch({
                type: ActionTypes.FETCH_DETAIL_PRODUCT,
                payload: responseJSON,
            });
            console.log("masuk kesini");
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(url + "/customer/categories");
            const responseJSON = await response.json();
            dispatch({
                type: ActionTypes.FETCH_CATEGORIES,
                payload: responseJSON,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchTransactions = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(url + "/customer/transactions", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                }
            });
            const responseJSON = await response.json();
            dispatch({
                type: ActionTypes.FETCH_TRANSACTIONS,
                payload: responseJSON,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const postTransaction = (product_varian_id, product_id, qty) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${url}/customer/transactions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
                body: JSON.stringify({
                    product_varian_id,
                    product_id,
                    qty,
                    created_user: localStorage.getItem("username"),
                    updated_user: localStorage.getItem("username"),
                }),
            });

            if (response.ok) {
                dispatch({
                    type: ActionTypes.POST_TRANSACTION_SUCCESS,
                    payload: "Transaction successful",
                });
                redirect("/");
            } else {
                dispatch({
                    type: ActionTypes.POST_TRANSACTION_FAILURE,
                    payload: "Transaction failed",
                });
            }
        } catch (error) {
            // console.error("Error posting transaction:", error);
            dispatch({
                type: ActionTypes.POST_TRANSACTION_FAILURE,
                payload: "An error occurred while posting the transaction",
            });
        }
    };
};

export const addProduct = (productData) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${url}/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                dispatch({
                    type: ActionTypes.ADD_PRODUCT_SUCCESS,
                    payload: "Product added successfully",
                });
            } else {
                dispatch({
                    type: ActionTypes.ADD_PRODUCT_FAILURE,
                    payload: "Failed to add product",
                });
            }
        } catch (error) {
            console.error("Error adding product:", error);
            dispatch({
                type: ActionTypes.ADD_PRODUCT_FAILURE,
                payload: "An error occurred while adding the product",
            });
        }
    };
};

export const login = (data) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url + "/administrator/login", {
                method: "POST",
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            const responseJSON = await response.json();
            if (!response.ok) {
                throw responseJSON;
            }
            localStorage.setItem("access_token", responseJSON.access_token);
            localStorage.setItem("role", responseJSON.role);
            localStorage.setItem("username", responseJSON.username);
            history.push("/");
            return { data: responseJSON };
        } catch (error) {
            console.log(error);
        }
    };
};

export const register = (data) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url + "/customer/register", {
                method: "POST",
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            const responseJSON = await response.json();
            if (!response.ok) {
                throw responseJSON;
            }

            // return { data: responseJSON };

            alert("berhasil register");
        } catch (error) {
            console.log(error);
        }
    };
};

// export const fetchDetailCategory = (id = null) => {
//     return async (dispatch) => {
//         try {
//             const response = await fetch(url + "/categories/" + id);
//             const responseJSON = await response.json();
//             dispatch({
//                 type: ActionTypes.FETCH_DETAIL_CATEGORY,
//                 payload: responseJSON,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };
