import React from 'react';

import s from '../styled';

const Navbar = () => (
    <s.Navbar>
        <s.NavLink to="/">Home</s.NavLink>
        <s.NavLink to="/carousel">Carousel Demo</s.NavLink>
    </s.Navbar>
);

export default Navbar;
