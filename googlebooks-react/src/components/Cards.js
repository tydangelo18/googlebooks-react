import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div className="Cards">
                <img src={this.props.image} alt="" />
                <div className="book">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.author}</h3>
                    <p>{this.props.description}</p>
                    <p>{this.props.link}</p>
                </div>
            </div>
        );
    }
}

export default Cards;