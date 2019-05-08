import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';
import Gallery from './gallery.js';

class Global extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: "",
            items: []
        }
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'})
        .then(response => response.json())
        .then(json => {
            let { items } = json;
            this.setState({items})
        });
    }

    render() {
        return (
            <div className="Global">
                <h2>Book Explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" 
                        placeholder="Search for a book" 
                        onChange={event => this.setState({query: event.target.value})}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.search();
                            }
                        }}
                        />
                        <InputGroup.Append>
                            <Button onClick={() => this.search()}variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items}/>
            </div>
        )
    }
}

export default Global;