import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Product from './product';

function App(){
    const Text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

    const Text1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

    const Text2 =  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

    const Text3 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    
    return(
        <div className='wrapper'>
            <Header />
        <main>
            <ul className='list'>
            <Product boktitel='Title' författare='Someone' text={Text} addToCart='Add to Cart'/>
            <Product boktitel='Title' författare='Someone' text={Text1} addToCart='Add to Cart'/>
            <Product boktitel='Title' författare='Someone' text={Text2} addToCart='Add to Cart'/>
            <Product boktitel='Title' författare='Someone' text={Text3} addToCart='Add to Cart'/>
            </ul>
        </main>
        </div> 
    )
}
ReactDom.render(<App/>, document.getElementById('root'))