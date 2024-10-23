import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { GlobalStorage } from "./exercises/context/globalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStorage>
      <App />
    </GlobalStorage>
  </StrictMode>
);
