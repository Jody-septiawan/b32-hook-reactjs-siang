import { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

import productData from '../dummyData/product';

export default function ListAndKeys() {
  const [data, setData] = useState(productData);
  console.log(data);
  return (
    <Container className="py-5">
      <Row>
        {data.map((product, index) => (
          <Col sm={3} key={index}>
            <Card className="shadow mb-3">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
