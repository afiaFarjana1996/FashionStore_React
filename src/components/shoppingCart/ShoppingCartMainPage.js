import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap'
import { ShowCart } from './ShowCartItem'
import {set } from '../LruCache'
import { Link } from 'react-router-dom'
import {ShowCartAction} from '../../actions/cartAction'


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

class ShoppingCartMainPage extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    ShowCartAction.render_cart();
  }

  render() {
    var cart = this.props.cartData;
    set('confirmPageDetails', this.props.totalToPay);
    let content = '';
    if (cart.length == 0) {
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
                <ShowTotal stringValue={"SubTotal:"} numericValue={this.props.totalToPay.subTotal} />
                <ShowTotal stringValue={"Tax:"} numericValue={this.props.totalToPay.tax.toFixed(2)} />
                <ShowTotal stringValue={"Total:"} numericValue={this.props.totalToPay.total.toFixed(2)} />
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