import React, { Component } from 'react';
import './App.css';
import bgmp4 from './assets/background.mp4';
import poster from './assets/background.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return(
      <div className='root'>
        <header className='v-header container'>
          <div className="fullscreen-video-wrap">
            <video src={bgmp4} autoPlay={true} loop={true} poster={poster}></video>
          </div>
          <div className="header-overlay"></div>
          <div className="header-content">
            <h1>Djolf's Page</h1>
            <p>This page is a coding practice by djolf.</p>
          </div>
          <div className="frontpage-btn">More..</div>
        </header>
      </div>
    );
  }

}

export default App;
