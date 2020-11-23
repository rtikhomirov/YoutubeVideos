import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Container} from 'reactstrap';

const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    };

    return (
        <Container className="themed-container" fluid={true}>
            <Form onSubmit={onFormSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Video Search</Label>
                    <Input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </FormGroup>
            </Form>
        </Container>
    );
};

export default SearchBar;