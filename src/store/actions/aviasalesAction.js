import { SET_TICKETS_TO_STORE,SUCCESS, SORT_BY} from '../../constants/aviasales'

export const aviasalesReducerAC = (tickets) => {
    return {
        type: SET_TICKETS_TO_STORE,
        tickets,
    };
};

export const success = (tickets) => {
    return {
        type: SUCCESS,
        tickets,
    };
};



export const ticketsMiddleAC = (payload) => {
    return {
        type: SORT_BY,
        payload: payload.tickets,
        sortType: payload.sortType
    };
};