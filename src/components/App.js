"use strict"

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from './header.js'
import { Home } from './home.js'
import ProductList from './ProductList'


const shoes = [{
    productId: 1,
    brand: 'Nike',
    name: 'Air Jordan',
    size: '10',
    price: 100,
}, {
    productId: 2,
    brand: 'Adidas',
    size: '11',
    name: 'Running Shoes',
    price: 100
}, {
    productId: 3,
    brand: 'Nike',
    size: '12',
    name: 'Running Shoes',
    price: 100
}]

const shirts = [{
    productId: 1,
    brand: 'Nike',
    name: 'Basketball shirt',
    price: 100,
    size: 'S'
}, {
    productId: 2,
    brand: 'Polo',
    size: 'M',
    name: 'polo',
    price: 100
}, {
    productId: 3,
    brand: 'NFL',
    size: 'L',
    name: 'jersey',
    price: 100
}]

const pants = [{
    productId: 1,
    brand: 'X',
    size: 'L',
    name: 'sweatpants',
    price: 100
}, {
    productId: 2,
    brand: 'Levi',
    size: 'M',
    name: 'jeans',
    price: 100
}]



const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shoes'
                render={() => (<ProductList category='Shoes'
                    products={shoes}/>)} />
            <Route path='/shirts'
                render={() => (<ProductList category='Shirts'
                    products={shirts}/>)} />
            <Route path='/pants'
                render={() => (<ProductList category='Pants'
                    products={pants}/>)} />
            
        </Switch>
    </div>
)

export default App
