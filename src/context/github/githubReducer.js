import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ALERT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.payload
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case SET_ALERT:
      return {
        ...state,
        alert: { msg: action.payload.msg, type: action.payload.type }
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        alert: null,
        loading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        alert: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
