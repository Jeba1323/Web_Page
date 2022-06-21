import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/dashboard' activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to='/candidates' activeStyle>
                        Candidates
                    </NavLink>
                    <NavLink to='/search' activeStyle>
                        Search
                    </NavLink>
                    <NavLink to='/settings' activeStyle>
                        Settings
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;