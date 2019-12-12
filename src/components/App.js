"use strict"

import React from 'react'
import { Switch, Route } from 'react-router-dom'


import { Header } from './header.js'
import { Home } from './home.js'
import {ShowMenShirts,ShowMenShoes,ShowWomenShoes,ShowMenJacket} from './ShowProducts'
import ShoppingCartMainPage from './shoppingCart/ShoppingCartMainPage'
import ShippingDetails from './shoppingCart/Registration'
import ProductStore from '../stores/productStore'
import {ConfirmPayment} from './shoppingCart/ConfirmPayment'
import {ShowCartObject} from './shoppingCart/ShoppingCartMainPage'

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
            },
            cartData:[],
            totalToPay:{
              subTotal: 0,
              totalItem: 0,
              tax: 0,
              total: 0
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
                render={(props) => (<ShoppingCartMainPage {...props} cartData={this.state.cartData} totalToPay={this.state.totalToPay}/>)} />
            <Route path='/register' 
            render={() => (<ShippingDetails />)} />
            <Route path='/confirmPayment' 
            render={(props) => (<ConfirmPayment {...props}/>)}/>
            <Route path='/confirmationPage' 
            component={Home} />
            

        </Switch>
            </div>
        );
    }

    componentDidMount(){
        
        ProductStore.addChangeListener(this._onMenShirtsChange.bind(this));
        ProductStore.addChangeListener(this._onMenShoesChange.bind(this));
        ProductStore.addChangeListener(this._onWomenShoeChange.bind(this));
        ProductStore.addChangeListener(this._onMenJacketChange.bind(this));
        ShowCartObject.addChangeListener(this._onCartChange.bind(this));
    }

    componentWillUnmount(){
        ProductStore.removeChangeListener(this._onMenShirtsChange.bind(this));
        ProductStore.removeChangeListener(this._onMenShoesChange.bind(this));
        ProductStore.removeChangeListener(this._onWomenShoeChange.bind(this));
        ProductStore.removeChangeListener(this._onMenJacketChange.bind(this));
        ShowCartObject.removeChangeListener(this._onCartChange.bind(this));
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
    _onCartChange(){
        console.log("inside cart change method:");
        this.setState({
            cartData: ShowCartObject.getAllCartItem(),
            totalToPay: ShowCartObject.getAllTotalPrice()   
        });
        console.log(this.state.cartData);
        console.log(this.state.total);
    }

}
export default App;