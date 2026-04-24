/* IMPORTS */
import "./GlobalLayout.css";
import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

export default function GlobalLayout() {
  return (
    <main className="globalLayoutShell">
      <NavBar />
      <Container size="lg" className="globalLayoutContent">
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}
