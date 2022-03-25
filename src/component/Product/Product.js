import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, price, ratings, img, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="no" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price {price}</p>
                <p><small>Manufacture {seller}</small></p>
                <p><small>Rating {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;