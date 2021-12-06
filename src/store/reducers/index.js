import { combineReducers } from "redux";

// My Reducer 
import securityReducer from './security';
import historicReducer from './historic';
import appReducer from './app';

const rootReducer = combineReducers(
  {
    //All Reducers
    app: appReducer,
    security: securityReducer,
    historic: historicReducer
  }
)

export default rootReducer;
