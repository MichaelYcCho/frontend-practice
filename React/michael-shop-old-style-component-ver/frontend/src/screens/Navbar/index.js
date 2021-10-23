
import React from 'react';
import { Nav, NavLink, NavIcon, TempSearchContainer, Bars } from './NavbarContainer';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Michael-Shop</NavLink>
                <TempSearchContainer to='/'><input value="" placeholder='Temp Search' readOnly /></TempSearchContainer>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;