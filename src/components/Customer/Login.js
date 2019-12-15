import React from 'react'
import cookie from 'react-cookies'
import {Form,Button} from 'react-bootstrap'
import {LoginAction} from '../../actions/LoginAction'
  
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      const content = ''
      const handleLogin = (event) => {
            event.preventDefault();
            let loginCredentials = {
                email : event.target.email.value,
                password : event.target.password.value
            }
            LoginAction.loginUser(loginCredentials);
        }
        return (
            
            <div className="row justify-content-md-center "  >
               {/* <h1>{_userLoggedIn.isLoggedIn}</h1> */}
                <Form style={{ paddingBottom: '50px' }} onSubmit={handleLogin}>

                    <div className="border border-info formDiv">
                        <h5>Login</h5>
                        <Form.Group controlId="Login" style={{ width: '500px' }}>
                            <Form.Label>User Email</Form.Label>
                            <Form.Control type="email" name="email" required placeholder="Email Address" />
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" required placeholder="Password" />
                        </Form.Group>
                        <Button type="submit" className="btn btn-info btn-md" style={{marginBottom:'20px'}}>Log In</Button>
                    </div>
                    
                </Form>
            </div>
        );
    }
}

export default Login;