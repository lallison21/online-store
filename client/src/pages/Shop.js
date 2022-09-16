import React from 'react';
import {Col, Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ItemList from "../components/ItemList";
import banner from "../assets/banner.jpg"

const Shop = () => {
    return (
        <Container>
            <Image className="mt-2" width={1300} height={400} src={banner} />
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ItemList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
