import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import date from 'date-and-time'
import {get} from '../components/LruCache'
import CONFIG from '../config'
import cookie from 'react-cookies'
import {loadCookie} from './cookie'

export const StripeBtn = (props) => {
  const publishableKey = "pk_test_MCokVVfFikiWylQdoWGfljUA00EakVW6wA";
  console.log("Inside stripe button method: ");
   console.log(props);
  const onToken = token => {
    const body = {
      amount: props.amount*100,
      token: token
  };
  var userData = cookie.load('userCookie');
  let order = {
    userId: userData[0].userId,
    orderDate: date.format(new Date(),'YYYY/MM/DD'),
    employeeId: null,
    creditCardId:userData[0].creditCardId
  }

     axios.post(CONFIG.backend_url+`orders`,order)
          .then(res =>{
            var productsToInsert = loadCookie('cartData');
            productsToInsert.forEach(cartItem => {
                cartItem.orderId = res.data.insertId;
                cartItem.taxes = cartItem.price * 0.08;
            });

                axios.post(CONFIG.backend_url+`orderDetails`,productsToInsert)
                     .then(res => {
                         console.log(res);
                     })
                     .catch( (error) => {
                        console.log(error);
                    });
          })
         .then(res => {
            axios.post(CONFIG.backend_url+"pay", body)
                      .then(response => {
                        props.history.push('/confirmationPage');
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
      amount={props.amount*100} //Amount in cents $9.99
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
  amount: PropTypes.number.isRequired,
  history: PropTypes.array.isRequired
}
