import React from 'react'
import {Form,Button} from 'react-bootstrap'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="row justify-content-md-center " >
                <Form style={{ paddingBottom: '50px' }}>

                    <div className="border border-info formDiv">
                        <h5>Login</h5>
                        <Form.Group controlId="Login" style={{ width: '500px' }}>
                            <Form.Label>User Email</Form.Label>
                            <Form.Control type="email" name="email" required placeholder="Email Address" />
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" required placeholder="Password" />
                        </Form.Group>
                        <Button className="btn btn-info btn-md" style={{marginBottom:'20px'}} >Log In</Button>
                    </div>
                    
                </Form>
            </div>
        );
    }
}

export default Login;