import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  UPDATE_DATA_REQUEST,
  CREATE_USER_SUCCESS,
  FETCH_DATA,
  DELETE_DATA,
  CREATE_USER,
  UPDATE_USER,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_DELETE,
} from "./constant";

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:8000/users");
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
    console.log("response", JSON.stringify(response.data));
  } catch (error) {
    console.log("error");
  }
}
export function* grootSaga() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}

// =====================================================================================

function* deleteData(action) {
  try {
    const id = action.payload;

    yield axios.delete(`http://localhost:8000/user/${id}`);
    const response = yield axios.get("http://localhost:8000/users");
    yield put({ type: FETCH_DATA_DELETE, payload: response.data });
  } catch (error) {
    console.error("Error while deleting user:", error);
  }
}

export function* deleteSaga() {
  yield takeLatest(DELETE_DATA, deleteData);
}

// ========================================================================================

function* createUser(action) {
  try {
    yield axios.post("http://localhost:8000/add-user",action.payload);
    const response = yield axios.get("http://localhost:8000/users");
    yield put({ type: CREATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export function* putSaga() {
  yield takeEvery(CREATE_USER, createUser);
}

// ====================================================================================================

function* updateUser(action) {
  try {
    const { id, singleUser } = action.payload;

    yield axios.put(`http://localhost:8000/user/${id}`, singleUser);
    const response = yield axios.get("http://localhost:8000/users");
    yield put({ type: UPDATE_DATA_REQUEST, payload: response.data });
  } catch (error) {
    console.error("Error while updating user:", error);
  }
}

export function* updateSaga() {
  yield takeLatest(UPDATE_USER, updateUser);
}
