import React, { Component } from 'react';
import '../styles/List.css';
//Import Components
import Card from './Card';


class List extends Component {
  
    render() {
        return (
            <div className="List">
                {this.props.books.map((book, i) => {
                    return <Card 
                    
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