import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {Button} from 'react-bootstrap';

const StripeBtn = (props) => {
  const publishableKey = "pk_test_2fhC84Ic854sl6KWrlaKHG5P";
   
  const onToken = token => {
    const body = {
      amount: props.amount*100,
      token: token
  };

  axios
      .post("http://localhost:3000/pay", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <StripeCheckout
      label="Payment" //Component button text
      name="GCIT Fashion Store" //Modal Header
      panelLabel="Pay " //Submit button in modal
      amount={props.amount*100} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    >
        <Button className="page btn btn-sm btn-info" style={{marginLeft:'50px'}}>
           Checkout
          </Button>
    </StripeCheckout>
  );
};

export default StripeBtn;