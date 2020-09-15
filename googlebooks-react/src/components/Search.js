import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
    render() {
        return (
            <div className="Search">
                <form onSubmit={this.props.getAPI} action="">
                    <input onChange={this.props.handleSearch} type="text" />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Search;