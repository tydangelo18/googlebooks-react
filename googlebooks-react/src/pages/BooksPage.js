import React, { Component } from 'react';
// Import Components 
import Header from '../components/Header';
import Books from '../components/Books';

class BooksPage extends Component {
    render() {
        return (
            <div className="BooksPage">
                <Header />
                <Books />
                
            </div>
        );
    }
}

export default BooksPage;