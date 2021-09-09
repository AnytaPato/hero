import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Search from "./Search";

const Cards = () => {
    return (
      <div className="App">
        <div>
          < Search />
        </div>
    <header>
  <Card className="Card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>SUPERHÉROE</Card.Title>
    <Card.Text>
    DATA PRINCIPAL
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>DATA 2</ListGroupItem>
    <ListGroupItem>DATA 3</ListGroupItem>
    <ListGroupItem>DATA 4</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">ATRAS</Card.Link>
    <Card.Link href="#">VER MÁS</Card.Link>
  </Card.Body>
</Card>  
  </header>

</div>
 )
}

export default Cards;
