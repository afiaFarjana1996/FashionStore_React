"use strict"
import React from 'react'
import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

 let _userSession = {
    response : {},
    isLoggedIn : false
 }

 class UserSessionStoreClass extends EventEmitter{
    addChangeListener(cb){
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb){
        this.removeListener(CHANGE_EVENT, cb);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    resetLogInStatus(){
        _userSession.isLoggedIn = false;
    }
    getUserSession(){
        return _userSession;
    }
 }

 const UserSession = new UserSessionStoreClass();

 Dispatcher.register((action) => {
    switch(action.actionType){
     case 'login_succeessfull':
        _userSession.response = action.data;
        _userSession.isLoggedIn = true;
        UserSession.emitChange();
         break;
    default:
        return;
         
        }
});

export default UserSession;
