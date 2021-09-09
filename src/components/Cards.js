import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Search from "./Search";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [
        {
          "response": "",
          "id": "",
          "name": "",
          "powerstats": {
            "intelligence": "",
            "strength": "",
            "speed": "",
            "durability": "",
            "power": "",
            "combat": ""
          },
          "biography": {
            "full-name": "",
            "alter-egos": "",
            "aliases": [
              "",
              ""
            ],
            "place-of-birth": "",
            "first-appearance": "",
            "publisher": "",
            "alignment": ""
          },
          "appearance": {
            "gender": "",
            "race": "",
            "height": [
              "",
              ""
            ],
            "weight": [
              "",
              ""
            ],
            "eye-color": "",
            "hair-color": ""
          },
          "work": {
            "occupation": "",
            "base": ""
          },
          "connections": {
            "group-affiliation": "",
            "relatives": ""
          },
          "image": {
            "url": ""
          }
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://superheroapi.com/api/10223059370130324")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="App">
        <div>
          < Search />
        </div>
    <header>
  <Card className="Card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>{}</Card.Title>
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
);
    }
  }
}


export default Cards;
