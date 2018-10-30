import React, {
    Component
} from 'react';
import shuffle from 'lodash.shuffle';

import Devinettes from './Devinettes.json';

// console.log(Devinettes);
const aleatoire = shuffle(Devinettes);
// console.log(shuffle(Devinettes));
console.log(aleatoire[0]);


class Questions extends Component {
    state = {
        index: 0
    };

    // lance la fonction autreQuestion AVANT de l'afficher
    componentDidMount() {
        this.autreQuestion();
    }

    autreQuestion = e => {
        this.setState(aleatoire[this.state.index]);
        this.setState(prevState => ({index: prevState.index +1}));
    }

    render() {
        // console.log(Devinettes);

        return ( 
            <div className = "Questions">
                <p>
                    {this.state.question}
                </p>
                <button onClick = {
                e => this.autreQuestion(e)
            } > Prochaine question !! </button>

            </div>
        );
    }
}

export default Questions;