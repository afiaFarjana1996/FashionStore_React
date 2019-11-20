"use strict"

import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'


const  ProductList = ({
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
                    <th>ID</th>
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

ProductList.propTypes = {
    category: PropTypes.string,
    products: PropTypes.array
}

export default ProductList