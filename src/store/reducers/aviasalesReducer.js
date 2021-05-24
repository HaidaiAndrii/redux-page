import { SET_TICKETS_TO_STORE } from '../../constants/aviasales';

const initialState = [];

export const aviasalesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS_TO_STORE: {
            return [...action.tickets];
        }
        default: {
            return state;
        }
    }
};