import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Navigate } from "react-router-dom";
import Folders from "../folders/Folders";

const AuthRoute = () => {
  const { isLog, loading } = useContext(AuthContext);

  return !isLog && !loading ? <Navigate replace to="/" /> : <Folders />;
};

export default AuthRoute;
