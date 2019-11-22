
import React,{Component} from 'react'
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

class ShoppingCartMainPage extends Component{
  
render(){
  const shoppingCartItem = ShoppingCart.map(item => <ShowCart key={item.id} item={item} />);
  const subTotal = ShoppingCart.reduce((total,item) => total+item.price,0);
  const tax = subTotal * 0.08;
  const total = subTotal+tax;
  return (
       <div className="justify-content-md-center">
       <Table striped>
         <thead>
         <th>Product Name</th>
         <th>Brand</th>
         <th>Size</th>
         <th>Price</th>
         <th>Quantity</th>
         <th></th>
         <th></th>
         </thead>
         <tbody>
         {shoppingCartItem}
         <ShowTotal stringValue={"SubTotal:"} numericValue={subTotal}/>
         <ShowTotal stringValue={"Tax:"} numericValue={tax.toFixed(2)}/>
         <ShowTotal stringValue={"Total:"} numericValue={total.toFixed(2)}/>
         </tbody>
         </Table>
          <Link to="/checkout"><Button className="page btn btn-sm btn-info" >
           Proceed to Checkout
          </Button></Link>
       </div>
      
  );
}
}

export default ShoppingCartMainPage;
