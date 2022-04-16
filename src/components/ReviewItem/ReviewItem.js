import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product,handleOnClick}) => {
    const { img, name, quantity, price, shipping } = product;
    return (
        <div className='review-items'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details-container'>
                <div className='product-details' title={name}>
                    <h4>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </h4>
                    <p>Price:
                        <span className='text-color'> ${price}</span>
                    </p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p>
                        <small>Shipping Charge:
                            <span className='text-color'> ${shipping}</span>
                        </small>
                    </p>
                </div>
                <button onClick={()=>handleOnClick(product)} className='btn-container'>
                        <FontAwesomeIcon icon={faTrashCan} className='delete-btn'></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;