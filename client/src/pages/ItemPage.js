import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import bigStar from "../assets/bigStar.png"
import {useNavigate, useParams} from "react-router-dom"
import {fetchOneItem} from "../http/itemAPI";
import {Context} from "../index";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const ItemPage = () => {
    const [item, setItem] = useState({info: []})
    const {id} = useParams()
    const {user} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        fetchOneItem(id).then(data => setItem(data))
    }, [id])

    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Image height={400} src={process.env.REACT_APP_API_URL + item.img} className="ms-5"/>
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{item.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {item.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 400, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{item.price} руб.</h3>
                        {user.user.role === 'USER' ?
                            <Button
                                variant={"outline-dark"}
                                onClick={() => user.isAuth ? navigate(`${BASKET_ROUTE}`) : navigate(`${LOGIN_ROUTE}`)}
                            >
                                Добавить в козину
                            </Button>
                            :
                            <Button
                                variant={"outline-dark"}
                                onClick={() => user.isAuth ? navigate(ADMIN_ROUTE) : navigate(`${LOGIN_ROUTE}`)}
                            >
                                Добавить новый товар
                            </Button>
                        }
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>О товаре</h1>
                {item.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default ItemPage;