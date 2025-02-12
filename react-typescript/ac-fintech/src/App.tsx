import { DataContextProvider } from "./context/dataContext";

import Header from "./components/header";
import Sadenav from "./components/sadenav";
import Summary from "./pages/summary";

import "./styles.css";

function App() {
  return (
    <DataContextProvider>
      <Sadenav />
      
      <main>
        <Header />
        <Summary />
      </main>
    </DataContextProvider>
  );
}

export default App;
