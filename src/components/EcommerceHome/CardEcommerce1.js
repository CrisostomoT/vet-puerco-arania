import React from 'react';
import img1 from '../../assets/img/paraTienda.jpg'
import './CardEcommerce.css';
import { MDBIcon } from 'mdbreact';
import Rating from './Rating'
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



// import Swiper from 'react-id-swiper';

// import 'react-id-swiper/lib/styles/css/swiper.css';

// import 'swiper/css/swiper.css';



const CardEcommerce1 = () => {

  const array = [1, 2, 3];

  return (
    <>

      <Container fluid>
        <Row>

          {array.map(arr => (
            <Col lg={4} md={6}>
              <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Nombre del producto</Card.Title>
                  <Card.Text>$249,80</Card.Text>
                  <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                  <Card.Text className="rating"><Rating /></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="shopping-bag" /></Button>
                  <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="shopping-cart" /></Button>
                </Card.Footer>
              </Card>
            </Col>

          ))}
        </Row>
      </Container>

      




    </>


  );
}

export default CardEcommerce1;