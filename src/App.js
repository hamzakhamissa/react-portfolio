import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function WipSplash() {
  const [showOld, setShowOld] = useState(false);

  if (showOld) return <Home />;

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a0a",
      gap: "2rem",
    }}>
      <p style={{
        color: "#ffffff",
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
        fontWeight: 500,
        margin: 0,
        letterSpacing: "0.02em",
      }}>
        Work in progress
      </p>
      <button
        onClick={() => setShowOld(true)}
        style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.4)",
          color: "rgba(255,255,255,0.7)",
          padding: "0.55rem 1.4rem",
          borderRadius: "6px",
          fontSize: "0.9rem",
          cursor: "pointer",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
          e.currentTarget.style.color = "#ffffff";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
          e.currentTarget.style.color = "rgba(255,255,255,0.7)";
        }}
      >
        Show old version
      </button>
    </div>
  );
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<WipSplash />} />

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
