import React, { Component } from 'react';
// Import Components
import Search from '../components/Search';

class Books extends Component {
    render() {
        return (
            <div className="Books">
                <Search />
            </div>
        );
    }
}

export default Books;