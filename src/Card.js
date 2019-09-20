import React from 'react';

export class Card extends React.Component {


    render(){
        return (
            <div className={this.props.css}  >
                <div className='circle'><img src={this.props.imgSource} className='pic' alt='profile pic'/></div>
                <h1>Calon {this.props.calon}</h1>
                <h2 className='vname'>{this.props.name}</h2>
                <h2 className='votenum'>{this.props.votes < 2 ? 'Vote :' : 'Votes :'}</h2>
                <h2 className='vnumber'>{this.props.votes}</h2>
            </div>
        );
    }
}