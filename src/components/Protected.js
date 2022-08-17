import { Navigate } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (!isLoggedIn) {
    return <Navigate to="/404" replace />;
  }
  return children ? children : <Outlet />;
};
export default Protected;
