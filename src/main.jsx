import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
  <UserProvider>
    <Router>
      <App />
    </Router>
    <ToastContainer/>
    </UserProvider>
  </>
);
