import React, { Component } from 'react';

class Next extends Component {
    render(){
        return(
            <div>
                <button onClick={() =>this.props.next()}> Next Question </button>
            </div>
        )
    }
}
export default Next;