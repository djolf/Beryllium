import React, { Component } from 'react';
import Hero from './Hero';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div className='root'>
                <Hero/>
            </div>
        );
    }
}

export default App;
