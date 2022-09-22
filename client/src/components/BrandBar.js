import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import {Card, Form} from "react-bootstrap";

const BrandBar = observer(() => {
    const {item} = useContext(Context)

    return (
        <Form className="d-flex">
            {item.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer', height: 40}}
                    key={brand.id}
                    className="p-2 text-center"
                    onClick={() => item.setSelectedBrand(brand)}
                    border={brand.id === item.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    );
});

export default BrandBar;