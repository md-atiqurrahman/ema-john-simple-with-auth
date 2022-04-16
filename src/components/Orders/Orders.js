import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCarts(products);
    let navigate = useNavigate();
     
    const handleOnClick = (selectedProduct) =>{
        let newCart = [];
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        newCart =[...rest]
        setCart(newCart);
        
        removeFromDb(selectedProduct.id);
    }
    return (
        <div className='orders'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                    key = {product.id}
                    product = {product}
                    handleOnClick = {handleOnClick}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
              <Cart cart={cart}><button onClick={() => navigate('/shipment')}>Proceed Shipment</button></Cart>
            </div>
        </div>
    );
};

export default Orders;