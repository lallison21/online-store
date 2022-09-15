import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import {ListGroupItem} from "react-bootstrap";

const TypeBar = observer( () => {
    const {item} = useContext(Context)

    return (
        <ListGroup>
            {item.types.map(type =>
                <ListGroupItem
                    style={{cursor: 'pointer'}}
                    active={type.id === item.selectedType.id}
                    onClick={() => item.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroupItem>
            )}
        </ListGroup>
    );
});

export default TypeBar;