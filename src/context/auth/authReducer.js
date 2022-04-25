import tokenAuth from "../../config/token";
import { LOGOUT, LOGIN_SUCCESS, SIGN_UP_SUCCESS, LOADING } from "../../types";

/* eslint-disable indent */
const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      tokenAuth(action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        usuario: action.payload.usuario,
        isLog: true,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      tokenAuth(null);

      return {
        ...state,
        token: null,
        usuario: null,
        isLog: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
