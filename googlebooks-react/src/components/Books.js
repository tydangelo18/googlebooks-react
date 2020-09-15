import React, { Component } from 'react';
import request from 'superagent';
// Import Components
import Search from '../components/Search';
import List from '../components/List';


class Books extends Component {
    // Initial State
        state = {
            books: [],
            searchBar: '',
        }
    

    // Search Method to change initial state
    handleSearch = (e) => {
        this.setState({ searchBar: e.target.value })
    }

    // API Request Method
    getAPI = (e) => {
        e.preventDefault();
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.searchBar })
        .then((data) => {
            this.setState({ books: [...data.body.items]})
            // console.log(data);
        })
    }
    
    render() {
        return (
            <div className="Books">
                <Search getAPI={this.getAPI} handleSearch={this.handleSearch} />
                <List books={this.state.books} /> 
            </div>
        );
    }
}

export default Books;