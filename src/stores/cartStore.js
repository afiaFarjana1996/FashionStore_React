import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _cart = {
    cartItem: [],
    totalPrice : {}
  }

  class ShowCartListenerClass extends EventEmitter {
    addChangeListener(cb) {
      this.on(CHANGE_EVENT, cb);
    }
  
    removeChangeListener(cb) {
      this.removeListener(CHANGE_EVENT, cb);
    }
  
    emitChange() {
      this.emit(CHANGE_EVENT);
    }
   resetCartItems(){
    _cart.cartItem= [];
    _cart.totalPrice = {};
    
   }
  
    getAllCartItem() {
      return _cart.cartItem;
    }
    getAllTotalPrice(){
      return _cart.totalPrice;
    }
  }
  
  export const CartStore= new ShowCartListenerClass();

  Dispatcher.register((action) => {
    switch (action.actionType) {
      case 'rendered_cart_data':
        CartStore.resetCartItems();
        _cart.cartItem = action.data.dataArray;
        _cart.totalPrice = action.data.totalPrice;
        CartStore.emitChange();
        break;
      case 'delete_successful':
        _cart.cartItem = _cart.cartItem.filter(x =>
          x.productId != action.data.productId);
          _cart.totalPrice = action.data.totalPrice;
          CartStore.emitChange();
        break;
      default:
        return;
    }
  });