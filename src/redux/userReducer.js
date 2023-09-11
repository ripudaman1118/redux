 import { combineReducers } from "redux";
import {
  FETCH_DATA_SUCCESS,
  UPDATE_DATA_REQUEST,
  FETCH_DATA_DELETE,
  CREATE_USER_SUCCESS,
} from "./constant";

const initialState = {
  data: [],
  setData: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_DELETE:
      return {
        ...state,
        data: action.payload,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE_DATA_REQUEST:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
