"use strict"

import React from 'react'
import PropTypes from 'prop-types'

const SizeMenu = () => (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button">S</button>
            <button className="btn btn-outline-secondary active" type="button">M</button>
            <button className="btn btn-outline-secondary" type="button">L</button>
        </div>
    </div>
)

const ProductRow = ({ product }) => (
    <tr key={product.productId}>
        <td> {product.productId} </td>
        <td> {product.brand} </td>
        <td> {product.name} </td>
        <td> 
            <SizeMenu/> 
        </td>
        <td> {product.price} </td>
        <td className='d-flex'>
            <div>
                <button type="button"
                    className="btn btn-primary">Add to Cart</button>
            </div>
        </td>
    </tr>
)

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow