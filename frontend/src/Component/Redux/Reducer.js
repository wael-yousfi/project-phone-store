import { ALLPRODUCT, ALLUSERS, GETCURRENT, LOGIN, LOGOUT, ONEPRODUCT, POSTPRODUCT } from "./ActionType"

const initialState = {
    products: [],
    product:{},
    users:[],
    basket: [],
    user:{}
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
        case LOGIN:
            localStorage.setItem('token',payload.token)
            return{...state, user: payload.user}    
        case LOGOUT:
            return{...state, user: {}}
        case GETCURRENT:
            return{...state, user: payload}     
        default:
            return state
    }
}


