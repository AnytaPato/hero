import React from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';

const Search = () => {
    return (
        <div className="Search">

        <Form>
        <h1>Busca tu Super Héroe</h1>
        <Row>
        <Col>
    <Form.Control  placeholder="TU SUPER HÉROE" />
        </Col>
        <Col>
    <Button type="submit" variant="success">Buscar</Button>{' '}
        </Col>
        </Row>
        </Form>
        </div>
    )
}

export default Search
