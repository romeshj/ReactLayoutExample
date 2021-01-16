import { all } from 'redux-saga/effects';
import OlympicWinnersSaga from './olympic-saga';

function* watchAll() {
   yield all([
		OlympicWinnersSaga()
   ]);
}

export default watchAll;

