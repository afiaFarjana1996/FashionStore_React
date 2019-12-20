import React from 'react'
import {Form,Button} from 'react-bootstrap'
import {LoginAction} from '../../actions/LoginAction'
import PropTypes from 'prop-types'

const ShowLoginErrorMessage = (props) => {
    if(props.didLoginFail == false){
       return null;
    }
    return (<h5> Wrong Credentials!</h5>
    );
}

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        LoginAction.renderLoginForm();
    }

    
    render() {
      const handleLogin = (event) => {
            event.preventDefault();
            let loginCredentials = {
                email : event.target.email.value,
                password : event.target.password.value
            }
            LoginAction.loginUser(loginCredentials);
        }
        var content = '';
        if(this.props.userSession.isLoggedOut == true){
          content = (
            <Form style={{ paddingBottom: '50px' }} onSubmit={handleLogin}>

            <div className="border border-info formDiv">
                <h5>Login</h5>
                <ShowLoginErrorMessage didLoginFail={this.props.userSession.didLoginFail}/>
                <Form.Group controlId="Login" style={{ width: '500px' }}>
                    <Form.Label>User Email</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Email Address" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required placeholder="Password" />
                </Form.Group>
                 <Button type="submit" className="btn btn-info btn-md" style={{marginBottom:'20px'}}>Log In</Button> 
            </div>
            
        </Form>
          )
        }
        if(this.props.userSession.isLoggedIn == true){
            this.props.history.push('/profile');
        }
        return (
            <div className="row justify-content-md-center "  >
                {content}
            </div>
        );
    }
}

Login.propTypes = {
    userSession: PropTypes.object
}

export default Login;