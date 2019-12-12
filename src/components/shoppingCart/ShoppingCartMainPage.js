import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap'
import { ShowCart } from './ShowCartItem'
import { get, set } from '../LruCache'
import { Link } from 'react-router-dom'
import Dispatcher from '../../dispatcher/appDispatcher';
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change';
const ShowTotal = (props) => {
  return (
    <tr>
      <td></td>
      <td>{props.stringValue}</td>
      <td>{props.numericValue}</td>
      <td></td>
      <td></td>
    </tr>
  );
}

let _cart = {
  cartItem: [],
  totalPrice : {}
}


class ShowCartListenerClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }


  getAllCartItem() {
    return _cart.cartItem;
  }
  getAllTotalPrice(){
    return _cart.totalPrice;
  }
}

export const ShowCartObject = new ShowCartListenerClass();

export const ShowCartAction ={
 
  render_cart: function () {
    const TotalItem = Number(get('addProductArray').reduce((total, item) => total + item.quantity, 0));
    const SubTotal = Number(get('addProductArray').reduce((total, item) => total + item.price, 0));
    const Tax = SubTotal * 0.08;
    Dispatcher.dispatch({
      actionType: 'rendered_cart_data',
      data: {
        dataArray: get('addProductArray'),
        totalPrice: {
          totalItem : TotalItem,
          subTotal : SubTotal,
          tax : Tax,
          total : SubTotal + Tax
        }
      }
    });
  },
  delete_from_cart: function (productId) {

    var tempCart = get('addProductArray');
    tempCart = tempCart.filter(cartItem =>
      cartItem.productId != productId);
    set('addProductArray', tempCart);

    const TotalItem = Number(get('addProductArray').reduce((total, item) => total + item.quantity, 0));
    const SubTotal = Number(get('addProductArray').reduce((total, item) => total + item.price, 0));
    const Tax = SubTotal * 0.08;

    Dispatcher.dispatch({
      actionType: 'delete_successful',
      data: {
        productId: productId,
        totalPrice: {
          totalItem : TotalItem,
          subTotal : SubTotal,
          tax : Tax,
          total : SubTotal + Tax
      }
    }
    });
  }
}
Dispatcher.register((action) => {
  switch (action.actionType) {
    case 'rendered_cart_data':
      _cart.cartItem = action.data.dataArray;
      _cart.totalPrice = action.data.totalPrice;
      ShowCartObject.emitChange();
      break;
    case 'delete_successful':
      _cart.cartItem = _cart.cartItem.filter(x =>
        x.productId != action.data.productId);
        _cart.totalPrice = action.data.totalPrice;
      ShowCartObject.emitChange();
      break;
    default:
      return;
  }
});



class ShoppingCartMainPage extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.totalToPay;
  }
  componentDidMount() {
    ShowCartAction.render_cart();
  }

  render() {
    var cart = this.props.cartData;
    console.log("Inside render: ");
    console.log(cart);
    console.log("totalToPay inside render: ");
    console.log(this.props.totalToPay);
    console.log(this.state);
    // const TotalItem = Number(cart.reduce((total, item) => total + item.quantity, 0));
    // const SubTotal = Number(cart.reduce((total, item) => total + item.price, 0));
    // const Tax = SubTotal * 0.08;
    // const Total = SubTotal + Tax;

    // this.setState({
    //   subTotal: SubTotal,
    //   totalItem: TotalItem,
    //   tax: Tax,
    //   total: Total
    // });
    set('confirmPageDetails', this.props.totalToPay);
    let content = '';
    if (typeof cart == "undefined") {

      cart = "No Product in the shopping cart.";
      content = (
        <div className="alert alert-danger" role="alert">
          {cart}
        </div>
      )
    } else {
      const shoppingCartItem = cart.map(item => <ShowCart key={item.productId} item={item} />);
      content = (
        <div className='container'>
          <div className='d-flex align-items-center'>
            <Table striped>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th></tr>
              </thead>
              <tbody>
                {shoppingCartItem}
                <ShowTotal stringValue={"SubTotal:"} numericValue={this.state.subTotal} />
                <ShowTotal stringValue={"Tax:"} numericValue={this.state.tax.toFixed(2)} />
                <ShowTotal stringValue={"Total:"} numericValue={this.state.total.toFixed(2)} />
              </tbody>
            </Table>
          </div>
          <Link to="/confirmPayment"> <Button className="page btn btn-sm btn-info" style={{ marginLeft: '50px' }}>
            Checkout
         </Button> </Link>
        </div>
      )
    }


    return (
      <div className='container'>
        {content}
      </div>

    );
  }
}

ShowTotal.propTypes = {
  stringValue: PropTypes.object.isRequired,
  numericValue: PropTypes.object.isRequired
}

ShoppingCartMainPage.propTypes = {
  cartData: PropTypes.array.isRequired,
  totalToPay: PropTypes.object.isRequired
}


export default ShoppingCartMainPage;