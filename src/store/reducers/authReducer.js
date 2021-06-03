import {SET_AUTH } from '../../constants/aviasales';

const initialState = JSON.parse(localStorage.getItem('isAuth'));

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};