"use strict"

import React from 'react'
import PropTypes from 'prop-types'

const ProductRow = ({product}) => (
    <tr key={product.productId}>
        <td> {product.productId} </td>
        <td> {product.brand} </td>
        <td> {product.name} </td>
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