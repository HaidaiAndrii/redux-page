  
import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { aviasalesReducer } from './reducers/aviasalesReducer';
import { aviasalesAllReducer } from './reducers/aviasalesAllReducer';
// import { cinemaReducer } from './reducers/cinemaReducer';
// import rootSaga from './sagas/rootSaga';

const rootReducer = combineReducers({
    aviaTickets: aviasalesReducer,
    allAviaTickets: aviasalesAllReducer
});
// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware()),
);
// sagaMiddleware.run(rootSaga);