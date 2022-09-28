import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import ShowItem from "./ShowItem";

const ItemList = observer(() => {
    const {item} = useContext(Context)

    return (
        <Row className="d-flex">
            {item.items.map(item =>
                <ShowItem
                    key={item.id}
                    item={item}
                />
            )}
        </Row>
    );
});

export default ItemList;