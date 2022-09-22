import React, {useContext, useEffect} from 'react';
import {Col, Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ItemList from "../components/ItemList";
import banner from "../assets/banner.jpg"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchItems, fetchTypes} from "../http/itemAPI";

const Shop = observer (() => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchItems().then(data => item.setItems(data.rows))
    }, [item])

    return (
        <Container>
            <Row  className="mt-2">
                <Image src={banner} />
            </Row>
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
});

export default Shop;
