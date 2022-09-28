import React from 'react';
import {Card, Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const Basket = () => {
    return (
        <Container>
            <h1 className="text-lg-center mt-3">КОРЗИНА ТОВАРОВ</h1>
            <hr/>
            <Row>
                <Col md={8}>
                    <Card>
                        Товары
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        Их стоимость
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Basket;