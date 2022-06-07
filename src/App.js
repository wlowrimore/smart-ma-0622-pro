import React, { useState, Component } from "react";
import render from "react-dom";
import "./App.css";
import {
  NavDropdown,
  MenuItem,
  NavItem,
  Nav,
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger,
} from "react-bootstrap";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      form: "",
    };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const renderTab = () => {
      // const [currentTab, setCurrentTab] = useState("home");
      // switch (currentTab) {
      //   case "home":
      //     return <HomePage />;
      //   case "about":
      //     return <AboutPage />;
      //   case "signup":
      //     return <SignUpPage />;
      //   case "login":
      //     return <LoginPage />;
      //   default:
      //     return null;
      // }
    };

    return (
      <div>
        <Navbar />
        <HomePage />

        <Footer />
      </div>
    );
  }
}

export default App;
