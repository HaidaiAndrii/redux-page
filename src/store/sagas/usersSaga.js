import { takeEvery, put, call } from "redux-saga/effects";
import { getUsers } from "../../API/API";
import { userSagasAC } from "../actions/usersAC";
import { SET_USERS } from "../../constants/users";

function* onUsersRequest() {
  const users = yield call(getUsers);
  yield put(userSagasAC(users));
}

export default function* usersSaga() {
  yield takeEvery(SET_USERS, onUsersRequest);
}
