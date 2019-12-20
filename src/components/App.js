"use strict"

import React from 'react'
import { Switch, Route } from 'react-router-dom'


import { Header } from './header.js'
import { Home } from './home.js'
import ShowMenShirts from './Category/ShowMenShirts'
import ShowMenShoes from './Category/ShowMenShoes'
import ShowWomenShoes from './Category/ShowWomenShoes'
import ShowMenJacket from './Category/ShowMenJacket'
import ShoppingCartMainPage from './shoppingCart/ShoppingCartMainPage'
import Registration from './Customer/Registration'
import Login from './Customer/Login'
import ProductStore from '../stores/productStore'
import {CartStore} from '../stores/cartStore'
import {ConfirmPayment} from './shoppingCart/ConfirmPayment'
import {OrderConfirmation} from './shoppingCart/OrderConfirmation'
import {OrderStoreObject} from '../stores/orderStore'
import UserSession from '../stores/userSessionStore'
import {UserProfile} from '../components/Customer/Profile'

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            menShirts:{
                menShirtList: [],
                readState:{
                    success:false,
                    failure:false
                },
                error: ''
            },
            menShoes:{
                menShoeList: [],
                readState:{
                    success:false,
                    failure:false
                },
                error: ''
            },
            womenShoe:{
                womenShoeList: [],
                readState:{
                    success:false,
                    failure:false
                },
                error: ''
            },
            menJacket:{
                menJacketList: [],
                readState:{
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
            },
            confirmedOrderDetails : [],
            userSession : {
                isLoggedIn : false,
                isLoggedOut : false,
                didLoginFail : false
             }
        }
    }

    render() {
        return(
        <div>
        <Header userSession = {this.state.userSession} />
        <Switch>
            <Route exact path='/' render={() => (<Home/> )} />
             <Route path='/menshirt'
                render={(props) => (<ShowMenShirts {...props} menShirts={this.state.menShirts}/>)} />
           <Route path='/menshoe'
                render={(props) => (<ShowMenShoes {...props} menShoes={this.state.menShoes}/>)} />
            <Route path='/womenshoe'
                render={(props) => (<ShowWomenShoes {...props} womenShoe={this.state.womenShoe}/>)} />
            <Route path='/menjacket'
                render={(props) => (<ShowMenJacket {...props} menJacket={this.state.menJacket}/>)} />
            <Route path='/cart'
                render={(props) => (<ShoppingCartMainPage {...props} cartData={this.state.cartData} totalToPay={this.state.totalToPay}/>)} />
            <Route path='/register' 
            render={() => (<Registration />)} />
            <Route path='/login' 
            render={(props) => (<Login {...props} userSession={this.state.userSession}/>)} />
            <Route path='/confirmPayment' 
            render={() => (<ConfirmPayment />)}/>
            <Route path='/confirmationPage' 
            render={(props) => (<OrderConfirmation {...props} confirmedOrderDetails={this.state.confirmedOrderDetails}/>)} /> 
            <Route path='/profile' 
            render={() => (<UserProfile />)}/>
            

        </Switch>
            </div>
        );
    }

    componentDidMount(){
        
        ProductStore.addChangeListener(this._onMenShirtsChange.bind(this));
        ProductStore.addChangeListener(this._onMenShoesChange.bind(this));
        ProductStore.addChangeListener(this._onWomenShoeChange.bind(this));
        ProductStore.addChangeListener(this._onMenJacketChange.bind(this));
        CartStore.addChangeListener(this._onCartChange.bind(this));
       OrderStoreObject.addChangeListener(this._onOrderIdChange.bind(this));
       UserSession.addChangeListener(this._onUserSessionChange.bind(this));
    }

    componentWillUnmount(){
        ProductStore.removeChangeListener(this._onMenShirtsChange.bind(this));
        ProductStore.removeChangeListener(this._onMenShoesChange.bind(this));
        ProductStore.removeChangeListener(this._onWomenShoeChange.bind(this));
        ProductStore.removeChangeListener(this._onMenJacketChange.bind(this));
        CartStore.removeChangeListener(this._onCartChange.bind(this));
       OrderStoreObject.removeChangeListener(this._onOrderIdChange.bind(this));
       UserSession.removeChangeListener(this._onUserSessionChange.bind(this));
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
        this.setState({
            cartData: CartStore.getAllCartItem(),
            totalToPay: CartStore.getAllTotalPrice()
        });
    }
    _onOrderIdChange(){
         this.setState({
            confirmedOrderDetails: OrderStoreObject.getAllConfirmedOrderds()
         });
    }
    _onUserSessionChange(){
       this.setState({
        userSession : UserSession.getUserSession()
       });
       
    }

}
export default App;