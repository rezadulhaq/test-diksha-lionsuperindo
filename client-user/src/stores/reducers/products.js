import { ActionTypes } from "../actionType";

const initialState = {
    products: [],
    product: {},
    categories: [],
    variants: [],
    variant: {},
    transactions: [],
    transaction: {},

};
export function productReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: action.payload };
        case ActionTypes.FETCH_DETAIL_PRODUCT:
            return { ...state, product: action.payload };
        case ActionTypes.FETCH_CATEGORIES:
            return { ...state, categories: action.payload };
        case ActionTypes.FETCH_TRANSACTIONS:
            return { ...state, transactions: action.payload };
        case ActionTypes.POST_TRANSACTION_SUCCESS:
            // Handle success case if needed
            console.log("Transaction posted successfully");
            return state;
        case ActionTypes.POST_TRANSACTION_FAILURE:
            // Handle failure case if needed
            console.error("Error posting transaction:", action.payload);
            return state;
        case ActionTypes.ADD_PRODUCT_SUCCESS:
            // Handle success case if needed
            console.log("Product added successfully");
            return state;
        case ActionTypes.ADD_PRODUCT_FAILURE:
            // Handle failure case if needed
            console.error("Error adding product:", action.payload);
            return state;
        case ActionTypes.LOGIN_SUCCESS:
            return { ...state, error: null };
        case ActionTypes.LOGIN_FAILURE:
            return { ...state, error: action.payload };


        // case ActionTypes.FETCH_DETAIL_CATEGORY:
        //     return { ...state, products: action.payload };
        // case ActionTypes.FETCH_VARIANTS:
        //     return { ...state, variants: action.payload };
        // case ActionTypes.FETCH_DETAIL_VARIANT:
        //     return { ...state, variant: action.payload };
        // case ActionTypes.FETCH_TRANSACTIONS:
        //     return { ...state, transactions: action.payload };
        // case ActionTypes.FETCH_DETAIL_TRANSACTION:
        //     return { ...state, transaction: action.payload };
        default:
            return state;
    }
}
