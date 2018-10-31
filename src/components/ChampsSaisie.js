import React, {Component} from 'react';

import BlocQuestion from './BlocQuestion.json';

import './ChampsSaisie.css'


class ChampsSaisie extends Component {
    state = {

        reponse: ""


    }

    handleOnChange = (e) => {
        this.setState({
               [e.target.name]:e.target.value
        })
    }


    render() {
        return(
            <div>
                <form onSubmit=''>
                <input className="style" onChange={this.handleOnChange} value={this.state.reponse}type="text" name="reponse" placeholder='entrez votre reponse'></input>
                {console.log(BlocQuestion.reponse)}
                </form>
            </div>
        )

    }
}

export default ChampsSaisie;