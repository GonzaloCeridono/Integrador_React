import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "80vh",
          paddingTop: "5rem",
          backgroundColor: "#111",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
