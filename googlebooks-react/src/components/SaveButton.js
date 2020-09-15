import React, { Component } from 'react';
import '../styles/SaveButton.css';

class SaveButton extends Component {
    render() {
        const { handleClick } = this.props
        return (
            <div className="SaveButton">
                <button className="saveBtn" onClick={handleClick}>Save</button>
            </div>
        );
    }
}

export default SaveButton;