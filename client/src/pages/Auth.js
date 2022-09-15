import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">
                    {isLogin ? 'Авторизация' : 'Регистрация'}
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш password..."
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div className="w-50 mt-1">
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}
                                                       style={{textDecoration: "none"}}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div className="w-50 mt-1">
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}
                                                       style={{textDecoration: "none"}}>Войдите!</NavLink>
                            </div>
                        }
                        <Button className="w-25 me-3" variant={"outline-success"}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;