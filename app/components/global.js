import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

class Global extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
    }

    search() {
        console.log('search', this.state.query);
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
            </div>
        )
    }
}

export default Global;