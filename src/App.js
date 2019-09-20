import React, { Component } from 'react';
import './App.css';
import { Card } from './Card.js';
import ls from 'local-storage';
import pic from './tenor.gif';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      v1 : this.props.vote1,
      v2 : this.props.vote2,
      v3 : this.props.vote3
    };
}
  
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ v1 : ls.get('vote1'), v2 : ls.get('vote2'), v3 : ls.get('vote3')}), 10);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
          <ul>
            <li><Card name='Michelle and Karenza' calon='1' votes={this.state.v1} css='box1' imgSource={pic} /></li>
            <li><Card name='Josephine and Darren' calon='2' votes={this.state.v2} css='box2' imgSource={pic} /></li>
            <li><Card name='Calvin and Janice' calon='3' votes={this.state.v3} css='box3' imgSource={pic} /></li>
          </ul>
          
      </div>
    );
  }
}

export default App;
