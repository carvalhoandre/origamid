import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

import { Home } from "../pages/home";
import { LoginRoutes } from "./login";

import { User } from "./user";
import { Photo } from "../pages/photo";
import { NotFound } from "../pages/notFound";
import { ProtectedRoutes } from "./protecteds";
import { UserProfile } from "../pages/userProfile";

const Routes = () => (
  <div className="App">
    <Header />

    <main className="AppBody">
      <RouterRoutes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<LoginRoutes />} />
        <Route
          path="account/*"
          element={
            <ProtectedRoutes>
              <User />
            </ProtectedRoutes>
          }
        />
        <Route
          path="photo/:id"
          element={
            <ProtectedRoutes>
              <Photo />
            </ProtectedRoutes>
          }
        />
        <Route
          path="profile/:user"
          element={
            <ProtectedRoutes>
              <UserProfile />
            </ProtectedRoutes>
          }
        />
      </RouterRoutes>
    </main>
    <Footer />
  </div>
);

export { Routes };
