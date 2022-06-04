import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  const [currentTab, setCurrentTab] = useState("home");

  const renderTab = () => {
    switch (currentTab) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "signup":
        return <SignUpPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>{renderTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
