import { SET_USERS, USERS_SAGA_AC } from "../../constants/users";

export const usersAC = (payload) => {
  return {
    type: SET_USERS,
    payload,
  };
};

export const userSagasAC = (payload) => {
  return {
    type: USERS_SAGA_AC,
    payload,
  };
};
