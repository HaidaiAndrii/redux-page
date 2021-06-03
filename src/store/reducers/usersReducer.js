import { USERS_SAGA_AC} from '../../constants/users';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_SAGA_AC: {
            return [...action.payload];
        }
        default: {
            return state;
        }
    }
};