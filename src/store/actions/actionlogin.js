import  { SET_AUTH } from '../../constants/aviasales'

export const loginAC = (payload) => {
    return {
        type: SET_AUTH,
        payload,
    };
};