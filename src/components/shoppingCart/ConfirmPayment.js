import React from 'react'
import {get} from '../LruCache'
import {Table} from 'react-bootstrap'
import {StripeBtn} from '../StripeButton'


export function ConfirmPayment(){
    const confirmPageDetails = get('confirmPageDetails');
    console.log(confirmPageDetails.subTotal);
    return(
        <div className='container'>
        <div className='d-flex align-items-center'>
        <Table stripped>
           <tbody>
            <tr> <td>Total Item: </td> <td>{confirmPageDetails.totalItem}</td></tr>
            <tr>  <td>Subtotal</td> <td>{confirmPageDetails.subTotal}</td> </tr>
            <tr>  <td>Tax</td> <td>{confirmPageDetails.tax}</td> </tr>
            <tr>  <td>Total</td> <td>{confirmPageDetails.total}</td> </tr>
            <tr><StripeBtn amount={confirmPageDetails.total.toFixed(2)}/></tr>
            </tbody>
     </Table>
     
     </div>
     </div>
    );
}