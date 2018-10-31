import React, {Component} from 'react';

import BlocQuestion from './BlocQuestion.json';

import './ChampsSaisie.css'


class ChampsSaisie extends Component {
    state = {


    }

    render() {
        return(
            <div>
                <input className="style" value={BlocQuestion.reponse} type="text" name="La reponse"></input>
            </div>
        )

    }
}

export default ChampsSaisie;