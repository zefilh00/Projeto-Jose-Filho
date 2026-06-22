import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#0b1020",
            color: "#fff",
            border: "1px solid rgba(59,130,246,.4)",
            borderRadius: "16px",
            boxShadow: "0 0 25px rgba(59,130,246,.15)",
          },
        }}
      />

      <App />
    </BrowserRouter>
  </StrictMode>
);