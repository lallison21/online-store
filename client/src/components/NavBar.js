import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import logo from "../assets/logo.png"
import Image from "react-bootstrap/Image";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
    }

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink className="ms-5" to={SHOP_ROUTE}><Image src={logo} height={35}/></NavLink>
            {user.isAuth ?
                <Nav className="ms-auto me-5">
                    {user.user.role === 'ADMIN' ?
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(`${ADMIN_ROUTE}`)}
                        >
                            Админ панель
                        </Button>
                        :
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(`${BASKET_ROUTE}`)}
                        >
                            Корзина
                        </Button>
                    }
                    <Button
                        variant={"outline-light"}
                        onClick={() => logOut()}
                        className='mx-2'
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ms-auto me-5" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={() => navigate(`${LOGIN_ROUTE}`)}>Авторизация</Button>
                </Nav>
            }
        </Navbar>
    );
});

export default NavBar;