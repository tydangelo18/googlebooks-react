import React, { Component } from 'react';
// Import Components
import Search from '../components/Search';

class Books extends Component {
    // Initial State
        state = {
            books: [],
            searchBar: '',
        }
    

    // Search Method to change initial state
    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchBar: e.target.value })
    }
    
    render() {
        return (
            <div className="Books">
                <Search handleSearch={this.handleSearch} />
            </div>
        );
    }
}

export default Books;