import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/404" replace />;
  }

  return children;
};
export default Protected;
