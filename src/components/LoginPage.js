import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function LoginPage() {
  return (
    <section className="login-form-container" id="login">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <p className="email">Email</p>
        <input
          type="email"
          name="login-email"
          id="login-email"
          placeholder="email"
        ></input>
        <p className="password">Password</p>
        <input
          type="password"
          name="login-password"
          id="login-password"
          placeholder="password"
        ></input>
        <button className="sub-btn" id="sub-btn" type="submit">
          <FaTelegramPlane className="icon" />
        </button>
        <h6>Not a member yet? Well, you should be!</h6>
      </form>
    </section>
  );
}
