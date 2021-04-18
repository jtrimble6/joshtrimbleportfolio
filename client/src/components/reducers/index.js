import {combineReducers} from 'redux';
import contacts from './contactReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  contacts,
  form: reduxFormReducer
})

export default rootReducer;