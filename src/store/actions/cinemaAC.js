import { SET_MOVIES, SET_MOVIES_TO_STORE } from '../../constants/cinema'

export const moviesSagaAC = (payload) => {
    console.log('action1')
    return {
        type: SET_MOVIES,
        payload
    };
};

export const moviesAC = (payload) => {
    console.log('action2')
    return {
        type: SET_MOVIES_TO_STORE,
        payload
    };
};