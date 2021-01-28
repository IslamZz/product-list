import React from 'react';
import logo from './shopping-cart-solid.svg'

function Checkout(props) {
    return (
        <div className='checkout'>
            <img src={logo}/>
            <span className='counter'>0</span>
        </div>
    );
}

export default Checkout;