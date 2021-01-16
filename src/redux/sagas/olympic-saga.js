import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../actions/action-types';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherOlympicWinners() {
  yield takeLatest("OLYMPIC_API_CALL_REQUEST", workerOlympicWinners);
}

// function that makes the api request and returns a Promise for response
function fetchOlympicWinners() {
  return axios({
    method: "get",
    url: "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerOlympicWinners(){
	try {
		const response = yield call(fetchOlympicWinners);
		const data = response.data;
		// dispatch a success action to the store with the new dog
		console.log( " OLYMPIC DATA IN  SAGA " , data )
		yield put({ type: "OLYMPIC_API_CALL_SUCCESS", data });
	}
	catch(e){
		// dispatch a failure action to the store with the error
		yield put({ type: "OLYMPIC_API_CALL_FAILURE", e });
	}	
}

