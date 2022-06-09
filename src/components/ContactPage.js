import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { validateEmail } from "../utils/helpers";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ formState });
  }

  function handleBlank(e) {
    if (e.target.name === "Name" || e.target.name === "Message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section
      id="contact"
      className="contact-container contact"
      onSubmit={handleSubmit}
    >
      <form id="contact-form" className="main-form">
        <h1>Contact Me</h1>
        <div className="form-group-contact">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            defaultValue={name}
            onBlur={handleBlank}
            name="name"
            placeholder="Name"
          />
        </div>

        <div className="form-group-contact">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="form-group-contact">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            name="message"
            defaultValue={message}
            onBlur={handleBlank}
            rows="5"
          />
          {errorMessage && <div className="wrong">Something Went Wrong!</div>}
          <button className="contact-btn" type="submit">
            <span className="icon">
              <FaPaperPlane />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}
