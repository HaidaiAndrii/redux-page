import { takeEvery, put } from "redux-saga/effects";
// import { getMovies } from "../../API/API";
import { moviesAC } from '../actions/cinemaAC'

import { SET_MOVIES } from "../../constants/cinema";
// import { forwardRef } from "react";

function* onMoviesRequest(payload) {
  // console.log('saga', payload.payload.value, payload.payload.localFileName, payload.payload.title)
  let localFileName =  payload.payload.localFileName
  let value = payload.payload.value;
  let title = payload.payload.title;

  const cinema = JSON.parse(localStorage.getItem('cinema'));
  if (cinema[localFileName][title].includes(`${value}`)) {
    let newArr = [...cinema[localFileName][title]];
    newArr.splice(newArr.indexOf(`${value}`), 1);
    newArr.length > 0
      ? 
      localStorage.setItem('cinema', JSON.stringify({ ...cinema, [localFileName]: {...cinema[localFileName], [title]: [...newArr]} }))
      : 
      localStorage.setItem('cinema', JSON.stringify({ ...cinema, [localFileName]: {[title]: []} }) );
  } else {
    let frr = {...cinema};
    frr[localFileName][title] = [...frr[localFileName][title], value];
    // console.log(frr, 'frr')
    localStorage.setItem('cinema', JSON.stringify(frr) )
  }
    yield put(moviesAC(JSON.parse(localStorage.getItem('cinema'))[localFileName][title]));
}

export default function* cinemaSaga() {
  yield takeEvery(SET_MOVIES, onMoviesRequest);
}
