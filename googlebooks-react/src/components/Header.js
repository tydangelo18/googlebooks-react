import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            <Link to="/"><h3 className="searchNav">Search</h3></Link> 
                        </div>
                        <div className="saved">
                            <Link to="/saved"><h3 className="savedNav">Saved</h3></Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default Header;