import React from 'react';
import imgURL from '../img/sherlock-holmes-147255_640.png';
import Cart from './cart';

function Header(){
    return(
        <header>
            <div className='logo'><img src={imgURL} width='40'></img></div>
            <Cart />
        </header>
    )
}

export default Header;