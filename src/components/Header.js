import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="active-page" exact={true}>Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="active-page">Create</NavLink></li>
            <li><NavLink to="/help" activeClassName="active-page">Help</NavLink></li>
        </ul>
    </header>
);

export default Header;