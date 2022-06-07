import React, { Component } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import {
  Navbar,
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

import CreateNewAccount from "./CreateNewAccount";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      smShow: false,
      email: "",
      password: "",
      mode: "login",
    };
  }

  setMode = (mode) => {
    this.setState({
      mode,
    });
  };

  renderForgot = () => {
    return (
      <div>
        <p>inside of forgot! :) </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.setMode("login");
          }}
        >
          Back to login
        </a>
      </div>
    );
  };

  renderRegister = () => {
    return (
      <div>
        <div>
          <form className="login-form-container">
            <div className="login-form">
              <button
                type="button"
                className="Close"
                data-dismiss="alert"
                aria-hidden="true"
              ></button>
              <span className="fw-semi-bold">Error:</span> Login failed.
            </div>
            <fieldset>
              <div className="form-group has-feedback required">
                <label htmlFor="login-email" className="col-sm-5">
                  Username or email
                </label>
                <div className="col-sm-7">
                  <span
                    className="form-control-feedback"
                    aria-hidden="true"
                  ></span>
                  <input
                    type="text"
                    name="email"
                    id="login-email"
                    className="form-control"
                    placeholder="Enter username or email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                {/* console.log('error email ::: ' + JSON.stringify(errors)) */}
              </div>
              <div className="form-group has-feedback required">
                <label htmlFor="login-password" className="col-sm-5">
                  Password
                </label>
                <div className="col-sm-7">
                  <span
                    className="form-control-feedback"
                    aria-hidden="true"
                  ></span>
                  <div className="login-password-wrapper">
                    <input
                      type="password"
                      name="password"
                      id="login-password"
                      className="form-control"
                      placeholder="*****"
                      required
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-action">
              <button type="submit" className="form-btn">
                Enter <span className="icon-arrow-right2 outlined"></span>
              </button>
            </div>
          </form>
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.setMode("login");
          }}
        >
          Log in here
        </a>
      </div>
    );
  };

  renderLogin = () => {
    return (
      <div>
        <form className="form">
          <fieldset>
            <div className="form-group has-feedback required">
              <label htmlFor="login-email" className="col-sm-5">
                Username or email
              </label>
              <div className="col-sm-7">
                <span
                  className="form-control-feedback"
                  aria-hidden="true"
                ></span>
                <input
                  type="text"
                  name="email"
                  id="login-email"
                  className="form-control"
                  placeholder="Enter username or email"
                  onChange={this.onChange}
                  value={this.state.email}
                  required
                />
              </div>
            </div>
            <div className="form-group has-feedback required">
              <label htmlFor="login-password" className="col-sm-5">
                Password
              </label>
              <div className="col-sm-7">
                <span
                  className="form-control-feedback"
                  aria-hidden="true"
                ></span>
                <div className="login-password-wrapper">
                  <input
                    type="password"
                    name="password"
                    id="login-password"
                    className="form-control"
                    placeholder="*****"
                    required
                    onChange={this.onChange}
                    value={this.state.password}
                  />
                  <div className="forgot">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setMode("forgot");
                      }}
                    >
                      Forgot Password
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-action">
            <button type="submit" className="form-btn">
              <FaTelegramPlane />{" "}
              <span className="icon-arrow-right2 outlined"></span>
            </button>
          </div>
          <div class="signup-position">
            <a
              className="no-member"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                this.setMode("register");
              }}
            >
              Not a member yet? Sign up!
            </a>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Modal
          show={this.props.showModal}
          onHide={this.props.onClose}
          onSubmit={this.onSubmit}
          bssize="large"
        >
          <Modal.Header closeButton={true}>
            <h2>
              {this.state.mode === "login"
                ? "Login"
                : this.state.mode === "register"
                ? "Register"
                : "Forgot Password"}
            </h2>
          </Modal.Header>
          <Modal.Body>
            {this.state.mode === "login"
              ? this.renderLogin()
              : this.state.mode === "register"
              ? this.renderRegister()
              : this.renderForgot()}
          </Modal.Body>
          <Modal.Footer>
            <Button className="form-close-btn" onClick={this.props.onClose}>
              X
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginForm;
