import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

import { Home } from "../pages/home";
import { LoginRoutes } from "./login";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<LoginRoutes />} />
    </RouterRoutes>
    <Footer />
  </BrowserRouter>
);

export { Routes };
