import React, { Component } from 'react';

class SaveButton extends Component {
    render() {
        const { handleClick } = this.props
        return (
            <div className="SaveButton">
                <button onClick={handleClick}>Save</button>
            </div>
        );
    }
}

export default SaveButton;