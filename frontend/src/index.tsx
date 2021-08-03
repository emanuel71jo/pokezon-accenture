import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./providers/AuthProvider";
import { ShoppingProvider } from "./providers/ShoppingProvider";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <ShoppingProvider>
          <App />
        </ShoppingProvider>
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
