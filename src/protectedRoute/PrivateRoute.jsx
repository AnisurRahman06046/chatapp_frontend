import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import PropTypes from "prop-types";
function PrivateRoute({ children }) {
  const { authUser } = useAuthContext();

  if (!authUser) {
    return <Navigate to="/login" />;
  }

  return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
