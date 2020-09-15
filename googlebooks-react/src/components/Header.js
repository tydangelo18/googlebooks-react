import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <h1 className="title">Google Books</h1>
                </header>
                <div className="navItems">
                        <div className="search" style={{paddingRight: "10px"}}>
                            <h3 className="searchNav">Search</h3>
                        </div>
                        <div className="saved">
                            <h3 className="savedNav">Saved</h3>
                        </div>
                </div>
            </div>
        )
    }
}

export default Header;