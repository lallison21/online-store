import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image"
import star from "../assets/star.png"
import {useNavigate} from "react-router-dom";
import {ITEM_ROUTE} from "../utils/consts";

const ItemItem = ({item}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className={"mt-2"} onClick={() => navigate(`${ITEM_ROUTE}/${item.id}`)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"} className="mt-4 ms-5">
                <Image width={150} height={200} src={process.env.REACT_APP_API_URL + item.img}/>
                <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
                    <div>GOD</div>
                    <div className="d-flex align-items-center">
                        <div className="me-1">{item.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>
                    {item.name}
                </div>
            </Card>
        </Col>
    );
};

export default ItemItem;