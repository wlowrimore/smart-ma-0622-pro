import React from "react";

function HomePage(props) {
  return (
    <div className="home-content" id="home">
      <section className="home-info">
        <h1>Welcome to Melody Architect</h1>
        <p>an app designed with musicians in mind</p>
        <button
          id="start-btn"
          type="submit"
          name="get started"
          className="start-btn"
        >
          Let's Get Started
        </button>
      </section>
    </div>
  );
}

export default HomePage;
