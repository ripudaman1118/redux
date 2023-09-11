import { FETCH_DATA, DELETE_DATA, CREATE_USER, UPDATE_USER } from "./constant";

export const fetchDataSuccess = () => ({ type: FETCH_DATA });

export const deleteData = (id) => ({
  type: DELETE_DATA,
  payload: id,
});

export const createUser = (postData) => ({
  type: CREATE_USER,
  payload: postData,
});

export const updateUser = (id, singleUser) => ({
  type: UPDATE_USER,
  payload: { id, singleUser },
});
