import React, { Component } from "react";
import Modal from "../components/Modal";

class Homepage extends Component {
  state = {
    modal: false,
  };
  selectModal = (info) => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div className="home-content" id="home">
        <section className="home-info">
          <h1>Welcome to Melody Architect</h1>
          <p>an app designed with musicians in mind</p>
          <p className="start-btn" onClick={this.selectModal}>
            Let's Get Started
          </p>
          <Modal
            displayModal={this.state.modal}
            closeModal={this.selectModal}
          />
        </section>
      </div>
    );
  }
  // function HomePage(props) {
  //   return (
  //

  //         <button
  //           id="start-btn"
  //           type="submit"
  //           name="get started"
  //           className="start-btn"
  //         >
  //           Let's Get Started
  //         </button>
  //       </section>
  //     </div>
  //   );
  // }
}
export default Homepage;
