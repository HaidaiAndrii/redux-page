import { takeEvery, put, call } from "redux-saga/effects";
import { getId } from "../../API/API";
import { getTickets } from "../../API/API";
import { success } from "../actions/aviasalesAction";
import { SET_TICKETS_TO_STORE } from "../../constants/aviasales";

function* onTicketsRequest() {
  const id = yield call(getId);
  const tickets = yield call(getTickets, id.searchId);
  yield put(success(tickets));
}

export default function* ticketsSaga() {
  yield takeEvery(SET_TICKETS_TO_STORE, onTicketsRequest);
}
