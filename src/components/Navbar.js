// Navbar.jsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import jsonData from '../data'; // Import the JSON file
import logo from '../assets/logo.svg';
import '../Home.css';

const { Header } = Layout;

const Navbar = () => {
    const menuItems = jsonData.menuItems || [];
    const companyName = jsonData.companyName || '';

    return (
        <Header className="header">
            <div className="logo">
                {companyName}
                <img src={logo} alt="Company Logo" className="logo-img" />
            </div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
                {menuItems.map(item => (
                    <Menu.Item key={item.key}>
                        <Link to={`/${item.label.toLowerCase()}`}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
    );
};

export default Navbar;
