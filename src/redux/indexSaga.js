import { all } from "redux-saga/effects";
import { grootSaga, deleteSaga, putSaga, updateSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([grootSaga(), deleteSaga(), putSaga(), updateSaga()]);
}
