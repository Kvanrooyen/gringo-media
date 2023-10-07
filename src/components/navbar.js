import React from 'react';
import { Menu } from 'antd';
import '../index.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Menu mode="horizontal" className="centered-menu">
            <Menu.Item key="home">
                <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link to="/about">ABOUT</Link>
            </Menu.Item>
            <Menu.Item key="contact">
                <Link to="/contact">CONTACT</Link>
            </Menu.Item>
        </Menu>
    );
}

export default NavBar;
