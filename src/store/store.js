import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import createSagaMiddleware from 'redux-saga';
import { aviasalesReducer } from "./reducers/aviasalesReducer";
// import { aviasalesAllReducer } from './reducers/aviasalesAllReducer';
// import { cinemaReducer } from './reducers/cinemaReducer';
import { authReducer } from "./reducers/authReducer";
import { usersReducer } from "./reducers/usersReducer";
import { cinemaReducer } from "./reducers/cinemaReducer";
import ticketsSaga from "./sagas/ticketsSaga";
import createSagaMiddleware from "redux-saga";
import usersSaga from "./sagas/usersSaga";
import cinemaSaga from "./sagas/cinemaSaga";
import { all } from "redux-saga/effects";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  aviaTickets: aviasalesReducer,
  isAuth: authReducer,
  users: usersReducer,
  movies: cinemaReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* rootWatcher() {
  yield all([ticketsSaga(), usersSaga(), cinemaSaga()]);
}

sagaMiddleware.run(rootWatcher);
