import React, { Component } from 'react';
//Import Components
import Cards from './Cards';

class List extends Component {
    render() {
        return (
            <div className="List">
                {this.props.books.map((book, i) => {
                    return <Cards 
                    key={i}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description} 
                    link={book.volumeInfo.infoLink}

                    />
                })}
            </div>
        );
    }
}

export default List;