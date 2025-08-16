import { useContext } from "react";
import { AuthContext } from "../provider/Context";
import { Navigate, useLocation } from "react-router";
import { Loader } from "../components/Loader";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location)
  if(loading){
    return <Loader></Loader>
  }
  if (user && user.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }
};
