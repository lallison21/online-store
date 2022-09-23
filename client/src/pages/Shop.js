import React, {useContext, useEffect} from 'react';
import {Col, Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ItemList from "../components/ItemList";
import banner from "../assets/banner.jpg"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchItems, fetchSizes, fetchTypes} from "../http/itemAPI";
import Pages from "../components/Pages";
import SizeBar from "../components/SizeBar";

const Shop = observer (() => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchSizes().then(data => item.setSizes(data))
        fetchItems(null, null, 1, item.limit).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item])

    useEffect(() => {
        fetchItems(item.selectedType.id, item.selectedBrand.id, item.selectedSize.id, item.page, item.limit).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item, item.page, item.selectedType, item.selectedBrand, item.selectedSize])

    return (
        <Container>
            <Row  className="mt-2">
                <Image src={banner} />
            </Row>
            <Row className="mt-3">
                <Col md={3}>
                    <h3 className="text-lg-center">Выберите тип</h3>
                    <hr/>
                    <TypeBar/>
                    <h3 className="text-lg-center">Выберите размер</h3>
                    <hr/>
                    <SizeBar/>
                </Col>
                <Col md={9}>
                    <h3 className="text-lg-center">Выберите бренд</h3>
                    <hr/>
                    <BrandBar/>
                    <ItemList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
