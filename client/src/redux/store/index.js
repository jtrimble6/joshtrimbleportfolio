// node modules
import { createStore, applyMiddleware, combineReducers } from "redux";
import {reducer as burgerMenu} from 'redux-burger-menu';
import {action as toggleMenu} from 'redux-burger-menu';
import thunk from "redux-thunk";
import promise from "redux-promise";
//custom modules
import contacts from "../../components/reducers/contactReducer";
// This will help me state the state for the store, I will set file contactReducer.js later on.
const reducers = combineReducers({
 contacts,
 burgerMenu
})
const initialState = {
    burgerMenu: {
        isOpen: false
    }
  };
const middlewares = [thunk, promise]
const store = createStore(
 reducers,
 initialState,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(...middlewares)
)
store.dispatch(toggleMenu(isOpen));
export default store;