import Header from "./components/header";
import Sadenav from "./components/sadenav";
import Summary from "./pages/summary";
import "./styles.css";

function App() {
  return (
    <>
      <Sadenav />
      
      <main>
        <Header />
        <Summary />
      </main>
    </>
  );
}

export default App;
