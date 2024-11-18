import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Contact, ProductDetails, ProductList, Header } from "./components";

const RouterOne = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <Header />

        <Routes>
          <Route path="" element={<ProductList />} />
          <Route path="details/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouterOne;
