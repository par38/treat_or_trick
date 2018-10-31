import React, { Component } from "react";
import Modal from "react-modal";

import "./BoutonReponse.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "40%",
    bottom: "20%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none"
  }
};

class BoutonReponse extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      reponse: undefined
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "Black";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
   
    return (
      <div>
        <button className="forme" onClick={this.openModal}>
          Je donne ma langue au chat.
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div>
            <h1 ref={subtitle => (this.subtitle = subtitle)}>
              {this.props.reponse}
            </h1>
          </div>

          <button onClick={this.closeModal}>x</button>
        </Modal>
      </div>
    );
  }
}

export default BoutonReponse;
