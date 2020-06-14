import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { pageJSONReducer } from '../reducers/pagejson.reducer';
import { userReducer } from '../reducers/user.reducer';

const rootReducer = combineReducers({
  page_json: pageJSONReducer,
  user: userReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export default () => {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return { store }
}
