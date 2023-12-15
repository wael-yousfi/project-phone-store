import { ALLPRODUCT, ALLUSERS, LOGOUT, ONEPRODUCT, POSTPRODUCT } from "./ActionType"

const initialState = {
    products: [],
    product:{},
    users:[],
    basket: []
}

export const products_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALLPRODUCT:
            return { ...state, products: payload }
        case ONEPRODUCT:
            return { ...state, product: payload }    
        case "ADDTOBASKET":
            return{...state, basket:[...state.basket,payload]}
        case "REMOVEFROMBASKET":
        return{...state, basket:state.basket.filter(e=>e.pro._id !== payload)}

        default:
            return state
    }
}
export const users_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALLUSERS:
            return { ...state, users: payload }
        case LOGOUT:
            return{...state, users: {}} 
        default:
            return state
    }
}


