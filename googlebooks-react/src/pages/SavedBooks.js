import React, { Component } from 'react';
import Header from '../components/SavedHeader';
import Saved from '../components/Saved';

class SavedBooks extends Component {
    render() {
        return (
            <div className="BooksPage">
                <Header />  
                <Saved />  
            </div>
        );
    }
}

export default SavedBooks;