import React from 'react';
import './style.css';
import Screen from './Screen.js';
import Panel from './Panel.js';
import ls from 'local-storage';

class Button extends React.Component {

    render() {
        return (
        <div className='table'>
            <ul id='horizontal-list'>
                <li><button onClick={this.props.display}>Display</button></li>
                <li><button onClick={this.props.control}>Control</button></li>
            </ul>
        </div>
        );
    }
}

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choosed : false,
            control: false,
            v1: 0,
            v2: 0
        };
    }

    componentDidMount(){
        ls.set('start', 0);
    }

    control = () => {
        this.setState({ 
            choosed : true,
            control : true
        });
    }
    
    display = () => {
        this.setState({ 
            choosed : true,
            control : false
        });
    }


    

    render() {
        return (
        <div>
            {this.state.choosed ? '' : <h1>Control Panel</h1>} 
            {this.state.choosed ? (this.state.control ? <Panel /> : <Screen />) : <Button display={this.display} control={this.control}/>}
        </div>
        );
    }
}

export default Control;