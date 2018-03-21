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
            <header class='v-header container'>
                <div class="fullscreen-video-wrap">
                    <video src={bgmp4} autoplay='true' loop='true'></video>
                </div>
                <div class="header-overlay"></div>
                <div class="header-content">
                    <h1>Djolf's Page</h1>
                    <p>This page is a coding practice by djolf.</p>
                </div>
                <div href="#" class="frontpage-btn">More..</div>
            </header>
        );
    }
}

export default Hero;
