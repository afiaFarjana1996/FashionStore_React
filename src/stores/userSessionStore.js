"use strict"

import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

 let _userSession = {
    isLoggedIn : false,
    isLoggedOut : false,
    didLoginFail : false
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
        _userSession.isLoggedOut = false;
        _userSession.didLoginFail = false;
    }
    getUserSession(){
        return _userSession;
    }
 }

 const UserSession = new UserSessionStoreClass();

 Dispatcher.register((action) => {
    switch(action.actionType){
     case 'login_succeessfull':
         UserSession.resetLogInStatus();
        _userSession.isLoggedIn = true;
        UserSession.emitChange();
         break;
     case 'login_failure':
         UserSession.resetLogInStatus();
         _userSession.didLoginFail = true;
         _userSession.isLoggedOut = true;
         UserSession.emitChange();
         break;
    case 'load_profile_page':
        UserSession.resetLogInStatus();
        _userSession.isLoggedIn = true;
        UserSession.emitChange();
        break;
     case 'currently_logged_out':
        UserSession.resetLogInStatus();
         _userSession.isLoggedOut = true;
        UserSession.emitChange();
        break;
    case 'successfully_logged_out':
        UserSession.resetLogInStatus();
        _userSession.isLoggedOut = true;
        UserSession.emitChange();
        break;
    default:
        return;
         
        }
});

export default UserSession;
