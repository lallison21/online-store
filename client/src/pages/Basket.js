import React from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const Basket = () => {
    return (
        <Container>
            <h1 className="text-lg-center mt-3">КОРЗИНА ТОВАРОВ</h1>
            <hr/>
                <Col>
                    <Card style={{minHeight: 500}}>
                        <Row className="mt-3">
                            <Col md={1} className="ms-4">Кол-во</Col>
                            <Col md={9}>Наименование товара</Col>
                            <Col md={1} className="ms-5">Стоимость</Col>
                        </Row>
                        <hr/>
                        <h3 className="text-lg-center mt-5 mb-5">Товары в корзине отсутствуют</h3>
                        <hr className="mt-auto"/>
                        <h5 className="ms-auto mb-3 me-3">Общая стоимость: 0 руб.</h5>
                        <Button variant={"outline-success"}>Оплатить товар</Button>
                    </Card>
                </Col>
        </Container>
    );
};

export default Basket;