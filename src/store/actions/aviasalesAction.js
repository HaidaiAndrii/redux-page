import { SET_TICKETS_TO_STORE, SET_ALLTICKETS_TO_STORE } from '../../constants/aviasales'

export const aviasalesReducerAC = (tickets) => {
    return {
        type: SET_TICKETS_TO_STORE,
        tickets,
    };
};

export const aviasalesAllReducerAC = (tickets) => {
    return {
        type: SET_ALLTICKETS_TO_STORE,
        alltickets: tickets,
    };
};