import React from 'react'
import {Form,Dropdown, Button} from 'react-bootstrap'

const divStyle ={
    marginTop: '50px',
    marginBottom:'20px',
    width:'650px',
    paddingLeft:'50px',
    border: '5px solid blue'
}

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

      StateDropDownMenuItem(){
          return(
            <div>
            <label for="state" class="col-sm-2 control-label">State</label>
                {/* <div class="col-sm-10"> */}
                <select class="form-control" id="state" name="state" style={{width:'250px'}}>
                    <option value="">N/A</option>
                    <option value="AK">Alaska</option>
                    <option value="AL">Alabama</option>
                    <option value="AR">Arkansas</option>
                    <option value="AZ">Arizona</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DC">District of Columbia</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="IA">Iowa</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MD">Maryland</option>
                    <option value="ME">Maine</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MO">Missouri</option>
                    <option value="MS">Mississippi</option>
                    <option value="MT">Montana</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="NE">Nebraska</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NV">Nevada</option>
                    <option value="NY">New York</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VA">Virginia</option>
                    <option value="VT">Vermont</option>
                    <option value="WA">Washington</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WV">West Virginia</option>
                    <option value="WY">Wyoming</option>
                </select>
            </div>
       
          );
      }

     render(){
    return(
    <div class="row justify-content-md-center" >     
    <Form >
    <div class="border border-info" style={divStyle}>
    <Form.Group controlId="ShippingAddress" style={{width:'500px'}}>
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" name="address" required placeholder="Street address" />
    <Form.Label>Address 2 (Optional)</Form.Label>
    <Form.Control type="text" name="address2" placeholder="Apartment Suit Floor" />
    <Form.Label>City</Form.Label>
    <Form.Control type="text" name="city" required placeholder="City" />
    <this.StateDropDownMenuItem />
    <Form.Label>Zipcode</Form.Label>
    <Form.Control type="number" name="zipcode" required placeholder="Zipcode" style={{width:'300px'}} />
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" name="phoneNumber" required placeholder="Phone Number"/>
    </Form.Group>
    </div>
    <div class="border border-info" style={divStyle}>
    <Form.Group style={{width:'500px'}} controlId="cardInformation">
    <Form.Label>Card Holder Name</Form.Label>
    <Form.Control type="text" name="cardHolderName" required placeholder="Name" />
    <Form.Label>Card Number</Form.Label>
    <Form.Control type="number" name="cardNumber" required placeholder="Card Number" />
    <Form.Label>CVC</Form.Label>
    <Form.Control type="number" name="cvc" required placeholder="CVC" />
    </Form.Group>
    </div>
    <button className="btn btn-info btn-md">
    Continue
    </button>
    </Form>
    
    </div>

    );
}
 }

 export default ShippingDetails;