import { DataContextProvider } from "./context/dataContext";

import Header from "./components/header";
import Sadenav from "./components/sadenav";
import Summary from "./pages/summary";

import "./styles.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sadenav />
        
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
