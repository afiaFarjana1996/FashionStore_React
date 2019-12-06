"use strict"

import React from 'react'
import { Switch, Route } from 'react-router-dom'


import { Header } from './header.js'
import { Home } from './home.js'
import {ShowMenShirts,ShowMenShoes,ShowWomenShoes,ShowMenJacket} from './ShowProducts'
import ShoppingCartMainPage from './shoppingCart/ShoppingCartMainPage'
import ShippingDetails from './shoppingCart/Checkout'
import ProductStore from '../stores/productStore'
import {ConfirmPayment} from './shoppingCart/ConfirmPayment'


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            menShirts:{
                menShirtList: [],
                readState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            },
            menShoes:{
                menShoeList: [],
                readState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            },
            womenShoe:{
                womenShoeList: [],
                readState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            },
            menJacket:{
                menJacketList: [],
                readState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            }
        }
        
    }

    render() {
        return(
        <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
             <Route path='/menshirt'
                render={() => (<ShowMenShirts />)} />
           <Route path='/menshoe'
                render={() => (<ShowMenShoes />)} />
            <Route path='/womenshoe'
                render={() => (<ShowWomenShoes />)} />
            <Route path='/menjacket'
                render={() => (<ShowMenJacket />)} />
            <Route path='/cart'
                render={() => (<ShoppingCartMainPage />)} />
            <Route path='/register' 
            render={() => (<ShippingDetails />)}/>
            <Route path='/confirmPayment' 
            render={() => (<ConfirmPayment />)}/>
        </Switch>
            </div>
        );
    }

    componentDidMount(){
        
        ProductStore.addChangeListener(this._onMenShirtsChange.bind(this));
        ProductStore.addChangeListener(this._onMenShoesChange.bind(this));
        ProductStore.addChangeListener(this._onWomenShoeChange.bind(this));
        ProductStore.addChangeListener(this._onMenJacketChange.bind(this));
    }

    componentWillUnmount(){
        ProductStore.removeChangeListener(this._onMenShirtsChange.bind(this));
        ProductStore.addChangeListener(this._onMenShoesChange.bind(this));
        ProductStore.addChangeListener(this._onWomenShoeChange.bind(this));
        ProductStore.addChangeListener(this._onMenJacketChange.bind(this));
    }
    _onMenShirtsChange(){
        this.setState({menShirts: ProductStore.getAllMenShirts()});
    }
    _onMenShoesChange(){
        this.setState({menShoes: ProductStore.getAllMenShoes()});
    }
    _onWomenShoeChange(){
        this.setState({womenShoe: ProductStore.getAllWomenShoe()});
    }
    _onMenJacketChange(){
        this.setState({menJacket: ProductStore.getAllMenJacket()});
    }
}
export default App;