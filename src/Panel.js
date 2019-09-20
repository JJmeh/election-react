import React from 'react';
import './style.css';
import ls from 'local-storage';


export class Panel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vote1 : ls.get('vote1'),
            vote2 : ls.get('vote2'),
            vote3 : ls.get('vote3'),
        };
    }

    voteIncrease1 = () => {
        var votes = this.state.vote1;
        votes++;
        this.setState({
            vote1 : votes
        });
        ls.set('vote1', this.state.vote1+1);
    }

    voteIncrease2 = () => {
        var votes = this.state.vote2;
        votes++;
        this.setState({
            vote2 : votes
        });
        ls.set('vote2', this.state.vote2+1);
    }

    voteIncrease3 = () => {
        var votes = this.state.vote3;
        votes++;
        this.setState({
            vote3 : votes
        });
        ls.set('vote3', this.state.vote3+1);
    }

    voteDecrease1 = () => {
        var votes = this.state.vote1;
        votes--;
        this.setState({
            vote1 : votes
        });
        ls.set('vote1', this.state.vote1-1);
    }

    voteDecrease2 = () => {
        var votes = this.state.vote2;
        votes--;
        this.setState({
            vote2 : votes
        });
        ls.set('vote2', this.state.vote2-1);
    }

    voteDecrease3 = () => {
        var votes = this.state.vote3;
        votes--;
        this.setState({
            vote3 : votes
        });
        ls.set('vote3', this.state.vote2-1);
    }

    voteReset = () => {
        this.setState({
            vote1 : 0,
            vote2 : 0,
            vote3 : 0
        });
        ls.set('vote1', 0);
        ls.set('vote2', 0);
        ls.set('vote3', 0)
    }

    startCount = () => {
        ls.set('start', 1);
    }


    render(){
        return (
            <div className='panel'>
                <ul id='horizontal-list'>
                   <li>
                       <div>
                            <h1 className='panel-h1'>Calon 1</h1>
                            <ul id='horizontal-list'>
                                <li>
                                    <button onClick={this.voteDecrease1}>
                                        <h1 className='panel-h1'>
                                            {'<'}
                                        </h1>
                                    </button>
                                </li>
                                <li><h1 className='panel-h1'>{this.state.vote1}</h1></li>
                                <li>
                                    <button onClick={this.voteIncrease1} >
                                        <h1 className='panel-h1'>
                                            {'>'}
                                        </h1>
                                    </button>
                                </li>
                            </ul>
                       </div>
                   </li>
                   <li>
                        <div>
                            <h1 className='panel-h1'>Calon 2</h1>
                            <ul id='horizontal-list'>
                                <li>
                                    <button onClick={this.voteDecrease2}>
                                        <h1 className='panel-h1'>
                                            {'<'}
                                        </h1>
                                    </button>
                                </li>
                                <li><h1 className='panel-h1'>{this.state.vote2}</h1></li>
                                <li>
                                    <button onClick={this.voteIncrease2}>
                                        <h1 className='panel-h1'>
                                            {'>'}
                                        </h1>
                                    </button>
                                </li>
                            </ul>
                       </div>
                   </li>
                   <li>
                        <div>
                            <h1 className='panel-h1'>Calon 3</h1>
                            <ul id='horizontal-list'>
                                <li>
                                    <button onClick={this.voteDecrease3}>
                                        <h1 className='panel-h1'>
                                            {'<'}
                                        </h1>
                                    </button>
                                </li>
                                <li><h1 className='panel-h1'>{this.state.vote3}</h1></li>
                                <li>
                                    <button onClick={this.voteIncrease3}>
                                        <h1 className='panel-h1'>
                                            {'>'}
                                        </h1>
                                    </button>
                                </li>
                            </ul>
                       </div>
                   </li>
                   <button onClick={this.voteReset}><h1 className='panel-h1'>RESET</h1></button>
                    <button onClick={this.startCount}><h1 className='panel-h1'>START</h1></button>
                </ul> 
            </div>
        );
    }
}

export default Panel;