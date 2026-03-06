import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StatusGate from "./snippets/site-status/StatusGate.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StatusGate>
      <App />
    </StatusGate>
  </StrictMode>,
);
