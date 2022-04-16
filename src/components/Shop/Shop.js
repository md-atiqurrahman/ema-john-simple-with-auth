import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import {addToDb, getStoredcart} from '../../utilities/fakedb';
import Product from '../Product/Product';
import './Shop.css';
import useProducts from '../../hooks/useProducts';
import useCarts from '../../hooks/useCarts';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCarts(products);

    let navigate = useNavigate();

   
    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exits = cart.find(product => product.id === selectedProduct.id);
        if(!exits){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exits.quantity = exits.quantity + 1;
            newCart = [...rest,exits];
        }
       
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop'>
            <div className="products-container">
               {
                   products.map(product => <Product
                     key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Product>)
               }
            </div>
            <div className="cart-container">
              <Cart cart={cart}><button onClick={() => navigate('/orders')}>Review orders</button></Cart>
            </div>
        </div>
    );
};

export default Shop;