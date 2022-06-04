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
    <div className="App">
      <p onClick={this.selectModal}>Open Modal</p>
      <Modal
        displayModal={this.state.modal}
        closeModal={this.selectModal}
      />
    </div>
  )
}
// function HomePage(props) {
//   return (
//     <div className="home-content" id="home">
//       <section className="home-info">
//         <h1>Welcome to Melody Architect</h1>
//         <p>an app designed with musicians in mind</p>




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
