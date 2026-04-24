/* IMPORTS */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider
        defaultColorScheme="dark"
        theme={{
          primaryColor: "blue",
          fontFamily: "Inter, sans-serif",
        }}>
        <Notifications />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
);
