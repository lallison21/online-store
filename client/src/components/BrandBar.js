import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";

const BrandBar = observer(() => {
    const {item} = useContext(Context)

    return (
        <Row className="d-flex">
            {item.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer', height: 40}}
                    key={brand.id}
                    className="p-2 w-25 text-center"
                    onClick={() => item.setSelectedBrand(brand)}
                    border={brand.id === item.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;