import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  //   logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    setAuthUser(null);
  };
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
