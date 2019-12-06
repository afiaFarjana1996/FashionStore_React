import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import date from 'date-and-time'
import {get} from '../components/LruCache'

export const StripeBtn = ({amount}) => {
  const publishableKey = "pk_test_MCokVVfFikiWylQdoWGfljUA00EakVW6wA";
   
  const onToken = token => {
    const body = {
      amount: amount*100,
      token: token
  };

  let order = {
    userId: 1,
    orderDate: date.format(new Date(),'YYYY/MM/DD'),
    employeeId: null,
    creditCardId:1
  }

     axios.post(`http://localhost:3000/orders`,order)
          .then(res =>{
            var productsToInsert = get('addProductArray');
            productsToInsert.forEach(cartItem => {
                cartItem.orderId = res.data.insertId;
                cartItem.taxes = cartItem.price * 0.08;
            });

            console.log("inside create_order_details ");
            console.log(productsToInsert);

                axios.post(`http://localhost:3000/orderDetails`,productsToInsert)
                     .then(res => {
                         console.log(res);
                     })
                     .catch( (error) => {
                        console.log(error);
                    });
          })
         .then(res => {
            console.log("inside then() after post for order");
            console.log(res);
            axios.post("http://localhost:3000/pay", body)
                      .then(response => {
                        console.log("response of axios post on payment api....");
                         console.log(response);
                         alert("Payment Success");
                   })
                      .catch(error => {
                       console.log("Payment Error: ", error);
                       alert("Payment Error");
                });
        })
       .catch( (error) => {
            console.log("error during creating order");
            console.log(error);
        });

  };

  return (
    <StripeCheckout
      //label="GCIT Fashion Store" Component button text
      name="GCIT Fashion Store" //Modal Header
      panelLabel="Pay" //Submit button in modal
      amount={amount*100} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    >
      <Button className="page btn btn-sm btn-info">
                    Confirm Payment
                </Button>
    </StripeCheckout>
  );
};

StripeBtn.propTypes = {
  amount: PropTypes.number.isRequired
}


// // let order = {
  // //   userId: 1,
  // //   orderDate: date.format(new Date(),'YYYY/MM/DD'),
  // //   employeeId: null,
  // //   creditCardId:1
  // // }
  // ManageOrders.create_order_details()
  // .then(() =>{
  //   alert("Insertion successfull");
  // })
  // .catch(error => {
  //         console.log(error);
  //         alert("Insertion error");
  //       });