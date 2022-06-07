import React, { Component } from "react";
import { render } from "react-dom";
import LoginForm from "../container/LoginForm.js";
import CreateNewAccount from "../container/CreateNewAccount.js";

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

class HomePage extends Component {
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

    return (
      <main className="home-content">
        <section className="home-info">
          <h1>Welcome to Melody Architect</h1>
          <p>an app designed with musicians in mind</p>

          <Button type="text" className="start-btn" onClick={this.open}>
            Let's Get Started!
          </Button>
          <LoginForm showModal={this.state.showModal} onClose={this.close} />
        </section>
      </main>
    );
  }
}

export default HomePage;
