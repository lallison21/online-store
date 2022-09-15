import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink className="ms-5" style={{color: 'white', textDecoration: "none"}} to={SHOP_ROUTE}>BananaShop</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto me-5" style={{color: 'white'}}>
                    <Button variant={"outline-light"}>Админ панель</Button>
                    <Button variant={"outline-light"} className='mx-2'>Выйти</Button>
                </Nav>
                :
                <Nav className="ms-auto me-5" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
        </Navbar>
    );
});

export default NavBar;