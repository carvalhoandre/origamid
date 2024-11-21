import React from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../../context/userContext";

const ProtectedRoutes = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === null) return null;

  return login ? children : <Navigate to="/login" replace />;
};

export { ProtectedRoutes };
