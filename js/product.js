import React from 'react';

function Product(props){
    return(
        <li className='list-item'>
            <h3>{props.boktitel}</h3>
            <h5>{props.författare}</h5>
            <p>{props.text}</p>
            <button className='cart-btn'>{props.addToCart}</button>
        </li>
    )
}

export default Product;

