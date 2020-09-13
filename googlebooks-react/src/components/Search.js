import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="Search">
                <form action="">
                    <input onChange={this.props.handleSearch} type="text" />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Search;