import React, { Component } from 'react';
import '../styles/Card.css';
import SaveButton from '../components/SaveButton';
import axios from 'axios'


class Card extends Component {
    constructor(props) {
        const { title, author, description, link, image} = props
        super(props)
        this.state = {
            title,
            author,
            description, 
            link, 
            image
        }
        this.handleClick  = this.handleClick.bind(this)
    }

    async handleClick(){
        try {
            //AJAX -- async/await
            //send a POST request to our DB to create new Book(req.body)
            const response = await axios.post('/books', this.state)
            console.log('RESPONSE line 25 Card.js ---> ', response)
           // const response = await axios.post('endpoint', this.state)
            //click save - save to databease
            //receive a response
                // -if it creates it, add it to interface (if necessary)
                //if it isn't, let the user know something went wrong, please try again

        } catch(err) {
          
            console.log('Error in line22 of Card.js-->', err)
        }
            
    }

    render() {
        return (
                <div className="Card">
                    <img src={this.props.image} alt="" />
                    <div className="book">
                        <h2 className="title">{this.props.title}</h2>
                        <h3 className="author">{this.props.author}</h3>
                        <p className="desc">{this.props.description}</p>
                        <p className="link">{this.props.link}</p>

                    </div>
                    <SaveButton handleClick={this.handleClick} />
                </div>
           
        );
    }
}

export default Card;