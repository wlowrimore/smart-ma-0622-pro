import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="header">
      <h2 className="app-title">Melody Architect</h2>
      <nav className="nav-links">
        <ul>
          <li className={currentTab === "home" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("home")}>Home</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
