import { Route, Routes } from "react-router-dom";

import { Login } from "../../pages/login";
import { Register } from "../../pages/register";
import { PasswordReset } from "../../pages/passwordReset";
import { PasswordRecovery } from "../../pages/passwordRecovery";

const LoginRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="password-reset" element={<PasswordReset />} />
    <Route path="password-recovery" element={<PasswordRecovery />} />
  </Routes>
);

export { LoginRoutes };
