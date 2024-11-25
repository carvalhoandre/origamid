import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserContext } from "../../context/userContext";

import { Login } from "../../pages/Login";
import { Register } from "../../pages/register";
import { NotFound } from "../../pages/notFound";
import { PasswordReset } from "../../pages/passwordReset";
import { PasswordRecovery } from "../../pages/passwordRecovery";

import styles from "./styles.module.css";

const LoginRoutes = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="password-reset" element={<PasswordReset />} />
          <Route path="password-recovery" element={<PasswordRecovery />} />
        </Routes>
      </div>
    </section>
  );
};

export { LoginRoutes };
