import { createStore, combineReducers } from "redux";
import { translationReducer } from '../reducers/translationsReducer';

const rootReducer = combineReducers({
  translations: translationReducer
});

export default () => {
  let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return { store }
}
