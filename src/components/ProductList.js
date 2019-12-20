"use strict"

import React from 'react'
import PropTypes from 'prop-types'
import {set} from './LruCache'
import {setCookie,loadCookie} from './cookie'
import cookie from 'react-cookies'
import {ShowCartAction} from '../actions/cartAction'

let productsAdded = [] ;


const AddToCartAction = ({product}) => {
    product.totalPrice = product.orderedQuantity * product.price;
    productsAdded.push(product);
    setCookie('cartData',productsAdded);
    console.log("Each time product is added to cart.");
    console.log(cookie.load('cartData'));
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
        if(product.quantity<product.orderedQuantity){
            alert("Not Enough in inventory. Only \n"+product.quantity+"of this product left.");
        }
        else{
        AddToCartAction({product});
        }
    }
    const changeQuantity = (event) => {
        // event.preventDefault();
        event.persist();
       product.orderedQuantity = event.target.value;
    }
    return(
        <div className="border border-info mainBody">
            <img className="productImage" src={product.imageUrl} />
            <br/>
            <label className="productInfo">{product.name}</label><br/>
            <label className="productInfo">{product.brand}</label><br/>
            <label className="productInfo">{product.price} </label><br/>
            <label htmlFor="quantity" className="productInfo" style={{fontSize:'12px'}}>Quantity</label>
                <select className="form-control" name="orderedQuantity" onChange={changeQuantity} style={{width:'50px', height:'30px'}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
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

