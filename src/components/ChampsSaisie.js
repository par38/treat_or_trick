import React, {Component} from 'react';

import './ChampsSaisie.css'
import Devinettes from './Devinettes.json';

class ChampsSaisie extends Component {
    state = {


    }

    render() {
        return(
            <div>
                <input className="style" value={Devinettes.reponse}type="text" name="La reponse"></input>
            </div>
        )

    }
}

export default ChampsSaisie;