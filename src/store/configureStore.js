import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import watchSagas from './configureSaga';
import userReducer from './users/reducer';

const globalState = combineReducers({
  userState: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
const store = createStore(globalState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchSagas);

export default store;
