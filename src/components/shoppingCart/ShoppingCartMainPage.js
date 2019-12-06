import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Table,Button} from 'react-bootstrap'
import {ShowCart} from './ShowCartItem'
import {get, set} from '../LruCache'
import { Link } from 'react-router-dom'


const ShowTotal = (props) => {
  return(
    <tr>
    <td></td>
    <td>{props.stringValue}</td>
    <td>{props.numericValue}</td>
    <td></td>
    <td></td>
    </tr>
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

   

  componentDidMount(){
  const cart = get('addProductArray');
 console.log("inside updated cart: ");
 console.log(cart);
  const TotalItem = Number(cart.reduce((total,item) => total+item.quantity,0));
  const SubTotal = Number(cart.reduce((total,item) => total+item.price,0));
  const Tax = SubTotal * 0.08;
  const Total = SubTotal+Tax;
  
  this.setState({
    subTotal: SubTotal,
    totalItem: TotalItem,
    tax : Tax,
    total: Total
  });

  var confirmPageDetails = {
    subTotal: SubTotal,
    totalItem: TotalItem,
    tax : Tax,
    total: Total
  }
  set('confirmPageDetails',confirmPageDetails);
  
  }
  
render(){
  const cart = get('addProductArray');
  const shoppingCartItem = cart.map(item => <ShowCart key={item.productId} item={item} />);
  
  return (
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
         <ShowTotal stringValue={"SubTotal:"} numericValue={this.state.subTotal}/>
         <ShowTotal stringValue={"Tax:"} numericValue={this.state.tax.toFixed(2)}/>
         <ShowTotal stringValue={"Total:"} numericValue={this.state.total.toFixed(2)}/>
         </tbody>
         </Table>
         </div>
        <Link to="/confirmPayment"> <Button className="page btn btn-sm btn-info" style={{marginLeft:'50px'}}> 
           Checkout
          </Button> </Link>
       </div>
      
  );
}
}

ShowTotal.propTypes = {
  stringValue: PropTypes.object.isRequired,
  numericValue: PropTypes.object.isRequired
}


export default ShoppingCartMainPage;