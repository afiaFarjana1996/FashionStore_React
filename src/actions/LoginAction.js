import React from 'react'
import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios'
import CONFIG from '../config'

export const LoginAction = {
    loginUser : function(loginCredentials){
        axios.post(CONFIG.backend_url+`customers/login`,loginCredentials)
        .then(res => {
            console.log("Inside login action: ");
            console.log(res);
            Dispatcher.dispatch({
                actionType : 'login_succeessfull',
                data: res.data
            });
        })
        .catch(error => {
           console.log(error);
        });
    }
}