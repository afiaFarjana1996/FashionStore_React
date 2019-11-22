
import React,{Component} from 'react';
import {Table,Button} from 'react-bootstrap'
import {ShoppingCart} from '../mockData/CartData'
import {ShowCart} from './ShowCartItem'
class ShoppingCartMainPage extends Component{
  
  ShowTotal(){
    const total = ShoppingCart.reduce((total,item) => total+item.price,0);
    return(
      <tr>
      <td></td>
      <td></td>
      <td>Total:</td>
    <td>{total}</td>
      <td></td>
      </tr>
    );
  }
render(){
  const shoppingCartItem = ShoppingCart.map(item => <ShowCart key={item.id} item={item} />);
   return (
       <div className="justify-content-md-center">
       <Table striped bordered>
         <thead>
         <th>Product Name</th>
         <th>Brand</th>
         <th>Size</th>
         <th>Price</th>
         <th>Quantity</th>
         </thead>
         <tbody>
         {shoppingCartItem}
         <this.ShowTotal />
         </tbody>
       </Table>
         <Button className="page btn btn-sm btn-info" >
           Proceed to Checkout
         </Button>
       </div>
      
  );
}
}

export default ShoppingCartMainPage;
