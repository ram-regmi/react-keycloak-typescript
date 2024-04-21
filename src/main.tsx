// import React from 'react'
import ReactDOM from "react-dom/client";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import keycloakInstance from "./helpers/keycloak";
import AppRouter from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
 // <React.StrictMode>
  <ReactKeycloakProvider
    authClient={keycloakInstance}
    initOptions={{ onLoad: "login-required" }}
  >
    <AppRouter />
  </ReactKeycloakProvider>
  // </React.StrictMode>,
);
