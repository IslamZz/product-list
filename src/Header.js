import React from 'react';
import Checkout from "./Checkout/Checkout";
import Menu from "./Menu";
import Logo from "./Logo/Logo";

function Header(props) {
    return (
        <div className='header'>
        <div className='logo'>
            <Logo />
        </div>
        <div className='menu'>
            <Menu />
        </div>
        <div className='checkout'>
            <Checkout />
        </div>
        </div>
    );
}

export default Header;