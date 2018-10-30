import React, { Component } from 'react';
import Modal from 'react-modal'

import BlocQuestion from './Devinettes.json';
import './Devinettes.css';

import NextQuestion from './NextQuestion';
import BoutonLangue from './BoutonLangue';

class Question extends Component {
    state = {
        index: 0,
        Quiz: BlocQuestion,
        showModal: false,
    }
    closeModal = () => {
        this.setState({
            showModal: false
        })
    }
    handleNextQuestion = () => {
        this.setState(prevState => ({
            index: prevState.index + 1
        }))
    }
    handleShowReponse = () => {
       this.setState({
           showModal:true
       })
    }
    render() {
        const { index, Quiz } = this.state;

        return (
            <div>
                <h2 className="question"> {Quiz[index].question}</h2>
                <NextQuestion next={this.handleNextQuestion} />
                <BoutonLangue reponse={this.handleShowReponse} />
                <Modal className="modal" isOpen={this.state.showModal}  >
                    <div onClick={this.closeModal}>
                        <h2> {Quiz[index].reponse} </h2>
                    </div>
                </Modal>
            </div>



        );
    }
}
export default Question;