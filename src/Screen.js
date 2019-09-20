import React, { Component } from 'react';
import App from './App.js';
import Gif from './just-like-me.gif';
import './Screen.css';
import ls from 'local-storage';

class Screen extends Component {
  
  render() {
    return (<View />
    );
  }
}

class View extends Component {
    constructor(props){
        super(props);
        this.state = {
          start : ls.get('start')
        };
    }

componentDidMount() {
    this.interval = setInterval(() => this.setState({ start : ls.get('start'), }), 10);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

    render () {
        if (this.state.start === 0) {
            return (
            <div className="Screen">
                <img className="image" src={Gif} alt="meh.."/> 
                <h1 className='h1-meh' >VOTE WISELY</h1>
                {}
            </div>
            );
        } else {
            return <App />;
        }
    }
}

export default Screen;
