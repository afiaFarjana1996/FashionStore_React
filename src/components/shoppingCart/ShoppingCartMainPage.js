import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Table} from 'react-bootstrap'
import {ShoppingCart} from '../../mockData/CartData'
import {ShowCart} from './ShowCartItem'
import StripeBtn from '../StripeButton'

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
  const TotalItem = ShoppingCart.reduce((total,item) => total+item.quantity,0);
  const SubTotal = ShoppingCart.reduce((total,item) => total+item.price,0);
  const Tax = SubTotal * 0.08;
  const Total = SubTotal+Tax;

  console.log("subTotal" + this.state.subTotal);
  this.setState({
    subTotal: SubTotal,
    totalItem: TotalItem,
    tax : Tax,
    total: Total
  });
  console.log("subTotal" + this.state.subTotal);
  }
  
render(){
  const shoppingCartItem = ShoppingCart.map(item => <ShowCart key={item.id} item={item} />);

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
         <ShowTotal stringValue={"SubTotal:"} numericValue={this.state.subTotal}/>
         <ShowTotal stringValue={"Tax:"} numericValue={this.state.tax.toFixed(2)}/>
         <ShowTotal stringValue={"Total:"} numericValue={this.state.total.toFixed(2)}/>
         </tbody>
         </Table>
         </div>
         <StripeBtn amount={this.state.total.toFixed(2)}/>
       </div>
      
  );
}
}

ShowTotal.propTypes = {
  stringValue: PropTypes.object.isRequired,
  numericValue: PropTypes.object.isRequired
}


export default ShoppingCartMainPage;