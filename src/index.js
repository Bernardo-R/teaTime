import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./components/hooks/useAuth";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
