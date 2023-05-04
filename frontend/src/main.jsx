import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1088762092091-dnscdad7auhsbvrbvdlvidje619f3a2a.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
