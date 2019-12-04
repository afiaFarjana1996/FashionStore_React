"use strict"

import React from 'react'
import PropTypes from 'prop-types'

let productsAdded = [];
let myStorage = window.localStorage;


export function ProductRow ({product}){
    const addToCart = () => {
        productsAdded.push({product});
        console.log(productsAdded);
    }
    return(
        <tr key={product.productId}>
        <td> {product.brand} </td>
        <td> {product.name} </td>
        <td> {product.price} </td>
        <td className='d-flex'>
            <div>
                <button type="button"
                    className="btn btn-primary" type="submit" onClick={addToCart} >Add to Cart</button>
            </div>
        </td>
    </tr>
    );
}

export function GetProductItems(){
    var tempCart = myStorage.getItem('addProductArray');
    const cart = JSON.parse(tempCart);
    // JSON.parse()
    console.log("Inside GetProductItems: "+ cart);
    console.log("Inside GetProductItems: "+ tempCart);
    tempCart.forEach(element => {
        System.out.print(element.product.productId+" "+element.product.brand);
    });
    return(
        <table>
            <thead>
            <tr>
            <td> Brand </td>
            <td> Name </td>
            <td> Price </td>
            </tr>
            </thead>
            <tbody>
            {cart.map(cartItem => (
                    <MapCartItem
                    cartItem={cartItem}/> 
                ))}
        </tbody>
        </table>
    );
}

function MapCartItem({cartItem}){
    return(
        <tr>
        <td> {cartItem.brand} </td>
        <td> {cartItem.name} </td>
        <td> {cartItem.price} </td>
        </tr>
    );
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

MapCartItem.propTypes = {
    cartItem: PropTypes.object.isRequired
}

