import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/bigStar.png"

const ItemPage = () => {
    const item = {id: 1, name: "Водолазка POLO чёрная", price: 1999, rating: 5, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"}
    const description = [
        {id: 1, title: 'Состав', description: 'Хлопок - 22%, Полиэстер - 78%'},
        {id: 2, title: 'Длина', description: '80 см'},
        {id: 3, title: 'Длина рукава', description: '74 см'},
        {id: 4, title: 'Сезон', description: 'Лето'},
        {id: 5, title: 'Цвет', description: 'Серый'},
        {id: 6, title: 'Узор', description: 'Однотонный'},
        {id: 7, title: 'Карманы', description: '2'},
        {id: 8, title: 'Страна производства', description: 'Турция'},
    ]

    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Image width={300} height={400} src={item.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{item.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {item.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 400, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{item.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>О товаре</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default ItemPage;