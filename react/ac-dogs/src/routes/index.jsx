import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

import { Home } from "../pages/home";
import { LoginRoutes } from "./login";
import { User } from "../pages/user";

import { ProtectedRoutes } from "./protecteds";

const Routes = () => (
  <>
    <Header />
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<LoginRoutes />} />

      <Route
        path="account/*"
        element={
          <ProtectedRoutes>
            <User />{" "}
          </ProtectedRoutes>
        }
      />
    </RouterRoutes>
    <Footer />
  </>
);

export { Routes };
