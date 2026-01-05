import React from "react"; // keep this, needed for JSX
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom"; // Add this for GitHub Pages routing

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
