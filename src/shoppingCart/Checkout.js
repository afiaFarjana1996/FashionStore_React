import React from 'react'
import {Form,Dropdown} from 'react-bootstrap'

 class ShippingDetails extends React.Component {

    constructor (props) {
        super(props);
        this.state = {  country: '',region: '' };
      }

      selectCountry (val) {
        this.setState({ country: val });
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }

     render(){
    return(
    <div class="row justify-content-md-center">
    <Form style={{width:'500px'}}>
    <Form.Group controlId="ShippingAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" name="address" required placeholder="Street address" />
    <Form.Label>Address 2 (Optional)</Form.Label>
    <Form.Control type="text" name="address2" placeholder="Apartment Suit Floor" />
    <Form.Label>City</Form.Label>
    <Form.Control type="text" name="city" required placeholder="City" />
    </Form.Group>
    </Form>
    <div>
        Country: <select class="gds-cr" country-data-region-id="gds-cr-two" data-language="en" country-data-default-value="US"></select>

        Region: <select id="gds-cr-two" region-data-default-value="California"></select>
    </div>
    </div>

    );
}
 }

 export default ShippingDetails;