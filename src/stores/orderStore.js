import Dispatcher from '../dispatcher/appDispatcher'
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const _order = {
    orderDetails : [],
    read_state: {
      success: false,
      failed: false
    }
  }

class OrderStoreClass extends EventEmitter{
    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb); 
      }
    
      removeChangeListener(cb) { 
        this.removeListener(CHANGE_EVENT, cb);
      }
    
      emitChange() {
        this.emit(CHANGE_EVENT);
      }
    resetConfirmOrderReadState(){
        _order.read_state.success=false;
        _order.read_state.failed=false;
    }
    getAllConfirmedOrderds(){
       return _order.orderDetails;
     }  
}

export const OrderStoreObject = new OrderStoreClass();

Dispatcher.register( (action) => {
    switch (action.actionType){
        case 'read_order_confirmation_success':
            OrderStoreObject.resetConfirmOrderReadState();
             _order.orderDetails =action.data;
             _order.read_state.success = true;
             OrderStoreObject.emitChange();
            break;
        case 'read_order_confirmation_failed':
            OrderStoreObject.resetConfirmOrderReadState();
             _order.read_state.failed = true;
             OrderStoreObject.emitChange();
            break;
       
        default:
            return;
    }
  });