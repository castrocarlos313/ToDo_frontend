/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { use, useLocation } from "react-router-dom";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";
import { LOGOUT, LOGIN_SUCCESS, SIGN_UP_SUCCESS } from "../../types";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    usuario: null,
    isLog: false,
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  const obtenerUsuario = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const { data } = await clienteAxios.get("/api/usuario");
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGOUT,
      });
    }
  };

  const signUp = async (usuario) => {
    try {
      const { data } = await clienteAxios.post("/api/usuario", usuario);

      toast.success("Se a creado con exito");

      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: data,
      });
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const login = async (usuario) => {
    try {
      const { data } = await clienteAxios.post("/api/auth", usuario);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        usuario: state.usuario,
        isLog: state.isLog,
        loading: state.loading,
        signUp,
        login,
        logout,
        obtenerUsuario,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
