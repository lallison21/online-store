import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Form} from "react-bootstrap";
import {Context} from "../index";

const SizeBar = observer(() => {
    const {item} = useContext(Context)
    console.log(item.sizes)

    return (
        <Form className="d-flex ms-5 mt-2 mb-5">
            {item.sizes.map(size =>
                <Card
                    style={{cursor: 'pointer', height: 40}}
                    key={size.id}
                    className="p-2 text-center"
                    onClick={() => item.setSelectedSize(size)}
                    border={size.id === item.selectedSize.id ? 'danger' : 'light'}
                >
                    {size.name}
                </Card>
            )}
        </Form>
    );
});

export default SizeBar;