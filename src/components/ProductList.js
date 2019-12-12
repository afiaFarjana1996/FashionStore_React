"use strict"

import React from 'react'
import PropTypes from 'prop-types'
import {set,get} from './LruCache'
import {ShowCartAction} from './shoppingCart/ShoppingCartMainPage'
let productsAdded = [] ;


const AddToCartAction = ({product}) => {
    product.quantity = 1;
    productsAdded.push(product);
    set('addProductArray',productsAdded);
    console.log("Inside add to cart action method: ");
    console.log(get('addProductArray'));
    ShowCartAction.render_cart();
}

export const ProductList = ({ 
    category = '', 
    products = []
}) => (
    <div >
        <div className='d-flex align-items-center'>
        <h1 className='heading m-0'>{category}</h1>
      </div>
           <div className="grid-container">
                {products.map(product => (
                    <ProductRow key={product.productId}
                        product={product}/> 
                ))}
            </div>
    </div>
)

function ProductRow ({product}){
    const addToCart = () => {
        AddToCartAction({product});
    }
    return(
        <div className="border border-info mainBody">
            <img className="productImage" src={'../images/'+product.imageName} />
            <br/>
            <label className="productInfo">{product.name}</label><br/>
            <label className="productInfo">{product.brand}</label><br/>
            <label className="productInfo">{product.price} </label><br/>
            <button type="button"
                className="btn btn-primary addToCartButton" onClick={addToCart} >Add to Cart</button>
            </div>
            
    );
}


ProductList.propTypes = {
    category: PropTypes.string,
    products: PropTypes.array
}
ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

