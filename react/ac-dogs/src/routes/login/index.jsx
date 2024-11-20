import { Navigate, Route, Routes } from "react-router-dom";

import { UserContext } from "../../context/userContext";

import { Login } from "../../pages/Login";
import { Register } from "../../pages/register";
import { PasswordReset } from "../../pages/passwordReset";
import { PasswordRecovery } from "../../pages/passwordRecovery";

const LoginRoutes = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="password-reset" element={<PasswordReset />} />
      <Route path="password-recovery" element={<PasswordRecovery />} />
    </Routes>
  );
};

export { LoginRoutes };
