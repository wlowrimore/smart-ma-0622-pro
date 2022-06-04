import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <section className="signup-form-container" id="signup">
      <h1 className="signup-title">Let's get you signed up!</h1>
      <form className="signup-form">
        <p className="first">First Name</p>
        <input
          type="text"
          name="first name"
          id="first-name"
          placeholder="First Name"
        ></input>
        <p className="last">Last Name</p>
        <input
          type="text"
          name="last name"
          id="last-name"
          placeholder="Last Name"
        ></input>
        <p className="email">Email</p>
        <input type="email" name="email" id="email" placeholder="Email"></input>
        <p className="password">Password</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        ></input>
        <p className="confirm">Confirm Password</p>
        <input
          type="password"
          name="confirm"
          id="confirm-pw"
          placeholder="re-enter your password"
        ></input>
        <button className="sub-btn" id="sub-btn" type="submit">
          <FaTelegramPlane className="icon" />
        </button>
      </form>
    </section>
  );
}
