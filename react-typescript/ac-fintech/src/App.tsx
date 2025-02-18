import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DataContextProvider } from "./context/dataContext";

import Sale from "./pages/sale";
import Sales from "./pages/sales";

import Summary from "./pages/summary";
import Header from "./components/header";
import Sadenav from "./components/sadenav";
import Footer from "./components/footer";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sadenav />

          <main>
            <Header />

            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<Sale />} />
            </Routes>
          </main>

        </div>
          <Footer />
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
