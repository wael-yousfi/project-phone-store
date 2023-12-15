import { combineReducers } from 'redux';
import { products_reducer, users_reducer } from './Reducer';



const rootReducer = combineReducers({
  products: products_reducer,
  users: users_reducer,
  
});

export default rootReducer;