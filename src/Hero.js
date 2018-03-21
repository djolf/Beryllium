import React, { Component } from 'react';
import './Hero.css';
import bgmp4 from './assets/background.mp4';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <header className='v-header container'>
                <div className="fullscreen-video-wrap">
                    <video src={bgmp4} autoPlay='true' loop='true'></video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <h1>Djolf's Page</h1>
                    <p>This page is a coding practice by djolf.</p>
                </div>
                <div href="#" className="frontpage-btn">More..</div>
            </header>
        );
    }
}

export default Hero;
