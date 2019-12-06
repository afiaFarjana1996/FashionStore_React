"use strict"

import React from 'react'
import PropTypes from 'prop-types'
import Dispatcher from '../dispatcher/appDispatcher'
import {set} from './LruCache'

let productsAdded = [] ;

export class ProductListClass{

    getCartItems(){
        return productsAdded;
    }
    
}
const ProductObject = new ProductListClass();

const AddToCartAction = ({product}) => {
    product.quantity = 1;
    productsAdded.push(product);
    set('addProductArray',productsAdded);
    
    Dispatcher.dispatch({
        actionType: 'add_to_cart',
        data:  productsAdded
    })
}

export const ProductList = ({ 
    category = '', 
    products = []
}) => (
    <div className='container'>
        <div className='d-flex align-items-center'>
        <h1 className='m-0'>{category}</h1>
    </div>
    <table className="table">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <ProductRow key={product.productId}
                        product={product}/> 
                ))}
            </tbody>
        </table>
    </div>
)

function ProductRow ({product}){
    const addToCart = () => {
        AddToCartAction({product});
    }
    return(
        <tr key={product.productId}>
        <td> {product.brand} </td>
        <td> {product.name} </td>
        <td> {product.price} </td>
        <td className='d-flex'>
            <div>
                <button type="button"
                    className="btn btn-primary" onClick={addToCart} >Add to Cart</button>
            </div>
        </td>
    </tr>
    );
}


ProductList.propTypes = {
    category: PropTypes.string,
    products: PropTypes.array
}
ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}



export default ProductObject