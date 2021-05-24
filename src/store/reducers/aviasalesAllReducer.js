import {  SET_ALLTICKETS_TO_STORE } from '../../constants/aviasales';

const initialState = [];

export const aviasalesAllReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALLTICKETS_TO_STORE: {
            return [...action.alltickets];
        }
        default: {
            return state;
        }
    }
};