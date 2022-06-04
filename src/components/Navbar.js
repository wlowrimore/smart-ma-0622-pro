import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="header">
      <h1 className="retroshadow">Melody Architect</h1>
      <nav className="nav-links">
        <ul>
          <li className={currentTab === "home" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("home")}>Home</span>
          </li>
          <li className={currentTab === "about" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("about")}>About</span>
          </li>
          <li className={currentTab === "signup" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("signup")}>SignUp</span>
          </li>
          <li className={currentTab === "home" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("home")}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
