import React, { Component } from 'react';
import SavedHeader from '../components/SavedHeader';
import Saved from '../components/Saved';

class SavedBooks extends Component {
    render() {
        return (
            <div className="BooksPage">
                <SavedHeader />  
                <Saved />  
            </div>
        );
    }
}

export default SavedBooks;