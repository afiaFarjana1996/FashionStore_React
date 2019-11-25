import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {Table,Button} from 'react-bootstrap'
import {ShoppingCart} from '../mockData/CartData'
import {ShowCart} from './ShowCartItem'

const ShowTotal = (props) => {
  return(
    <tr>
    <td></td>
    <td></td>
    <td>{props.stringValue}</td>
    <td>{props.numericValue}</td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
  );
}

export const SaveCartData = () => 
  {
    return(
        <div className='container'>
        <div className='d-flex align-items-center'>
       <Table striped>
        <tr><td>TotalItem:</td><td>4</td></tr>
         <tr><td>Total:</td><td>350.0</td></tr>
         <tr><td>Tax:</td><td>350.0</td></tr>
         <tr><td>subTotal:</td><td>350.0</td></tr>
         </Table>
         </div>
         
         <Button className="page btn btn-sm btn-info" > Confirm Payment </Button>
         </div>
        
      
    );
  }

   


class ShoppingCartMainPage extends Component{

  constructor(props){
     super(props);
     this.state={
       subTotal: 0,
       totalItem: 0,
       tax: 0,
       total: 0

     }
  }
  
render(){
  const shoppingCartItem = ShoppingCart.map(item => <ShowCart key={item.id} item={item} />);
  const totalItem = ShoppingCart.reduce((total,item) => total+item.quantity,0);
  const subTotal = ShoppingCart.reduce((total,item) => total+item.price,0);
  const tax = subTotal * 0.08;
  const total = subTotal+tax;
  this.setState = ({
    subTotal: subTotal,
    totalItem: totalItem,
    tax : tax,
    total: total
  });
  return (
         <div className='container'>
        <div className='d-flex align-items-center'>
       <Table striped>
         <thead>
         <tr><th>Product Name</th>
         <th>Brand</th>
         <th>Size</th>
         <th>Price</th>
         <th>Quantity</th>
         <th></th>
         <th></th></tr>
         </thead>
         <tbody>
         {shoppingCartItem}
         <ShowTotal stringValue={"SubTotal:"} numericValue={subTotal}/>
         <ShowTotal stringValue={"Tax:"} numericValue={tax.toFixed(2)}/>
         <ShowTotal stringValue={"Total:"} numericValue={total.toFixed(2)}/>
         </tbody>
         </Table>
         </div>
          <Link to="/confirmPayment"><Button className="page btn btn-sm btn-info" style={{marginLeft:'50px'}}>
           Proceed to Checkout
          </Button></Link>
       </div>
      
  );
}
}

ShowTotal.propTypes = {
  stringValue: PropTypes.object.isRequired,
  numericValue: PropTypes.object.isRequired
}


export default ShoppingCartMainPage;