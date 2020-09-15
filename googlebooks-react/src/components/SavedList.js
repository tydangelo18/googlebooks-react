import React, { Component } from 'react';
// Import Components
import SavedCards from './SavedCards';
import DeleteButton from './DeleteButton';


class SavedList extends Component {
    render() {
        return (
            <div className="SavedList">
                <SavedCards />
                <DeleteButton />
            </div>
        );
    }
}

export default SavedList;