import React, {Component} from 'react';
import MapRouter from "../router";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialDone: false
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                initialDone: true
            })
        },1000)
    }

    render() {
        return (
            <div>
                {
                    this.state.initialDone
                        ? <MapRouter/>
                        : <div>loading...</div>
                }
            </div>
        )
    }
}

export default App;
