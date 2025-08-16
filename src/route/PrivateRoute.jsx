import { useContext } from "react";
import { AuthContext } from "../provider/Context";
import { Navigate } from "react-router";
import { Loader } from "../components/Loader";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if(loading){
    return <Loader></Loader>
  }
  if (user && user.email) {
    return children;
  } else {
    return <Navigate to={"/auth/login"}></Navigate>;
  }
};
