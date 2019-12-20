
import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios'
import CONFIG from '../config'
import cookie from 'react-cookies'

export const LoginAction = {
    loginUser : function(loginCredentials){
        axios.post(CONFIG.backend_url+`customers/login`,loginCredentials)
        .then(res => {
            const expires = new Date();
            expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
           cookie.save('userCookie',res.data,{
            path: '/',
            expires,
            maxAge: 1000,
           });
           
            Dispatcher.dispatch({
                actionType : 'login_succeessfull',
                data: res.data
            });
        })
        .catch(error => {
           console.log(error);
           Dispatcher.dispatch({
               actionType: 'login_failure'
           });
        });
    },
    renderLoginForm : function(){
        Dispatcher.dispatch({
            actionType : 'currently_logged_out',
        });
    },
    renderProfilePage : function(){
        console.log(cookie.load('userCookie'));
        Dispatcher.dispatch({
            actionType: 'load_profile_page',
            data: cookie.load('userCookie')
        });
    }

}

export const LogoutAction = {
    logOutUser : function(){
        const expires = new Date();
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
        cookie.remove('userCookie',{
            path: '/',
            expires,
            maxAge: 1000,
           });
        Dispatcher.dispatch({
            actionType: 'successfully_logged_out'
        });
    }
}