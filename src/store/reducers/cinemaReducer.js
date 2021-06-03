import { SET_MOVIES_TO_STORE } from '../../constants/cinema';

const initialState = [];

export const cinemaReducer = (state = initialState, action) => {
    console.log('reducer')
    switch (action.type) {
        case SET_MOVIES_TO_STORE: {
            return {
                movies: [...action.payload],
            }
        }
        default: {
            return state;
        }
    }
};