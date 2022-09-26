import React from 'react';
import {observer} from "mobx-react-lite";
import {Col, Container, Navbar} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import qr from "../assets/qr.png"
import Row from "react-bootstrap/Row";

const Footer = observer(() => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                    <Row className="d-flex">
                        <h5 style={{color: "white"}} className="mt-3">
                            Контактнаяя информация
                        </h5>
                        <Row className="mt-3">
                            <Col style={{color: "white"}}>
                                <div className="ms-3">
                                    Мы в инстаграмм
                                </div>
                                <Image className="me-auto" src={qr} width={200}/>
                            </Col>
                        </Row>
                        <h6 style={{color: "white"}} className="mt-3">
                            Большой выбор товаров
                        </h6>
                        <div style={{color: "white"}} className="mt-1 mb-5">
                            В интернет-магазине BananaShop представлены лучшие коллекции женской одежды, обуви и аксессуаров, а также косметики и парфюмов ведущих мировых брендов.
                            Увлечённые модницы могут выбрать товары премиум-класса и органично совместить их с базовыми вещами демократичной ценовой категории. Любая покупка на сайте BananaShop происходит в два клика. Покупательница может быть уверена, что получит фирменную вещь превосходного качества с гарантией.
                            Для постоянных клиентов существует программа лояльности. Кроме того, на BananaShop регулярно проводятся распродажи товаров даже из новых модных коллекций.
                        </div>
                    </Row>
            </Container>
        </Navbar>
    );
});

export default Footer;