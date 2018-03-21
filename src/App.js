import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div>
                <video className="video-container video-container-overlay" autoPlay loop muted>
                    <source src='background.mp4' type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default App;
