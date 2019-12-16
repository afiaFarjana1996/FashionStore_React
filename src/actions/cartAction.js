import Dispatcher from '../dispatcher/appDispatcher';
import {get,set,isCacheEmpty} from '../components/LruCache'

export const ShowCartAction ={
 
    render_cart: function () {
      if(isCacheEmpty('addProductArray') == true){
        set('addProductArray',[]);
    }
      const TotalItem = Number(get('addProductArray').reduce((total, item) => total + item.orderedQuantity, 0));
      const SubTotal = Number(get('addProductArray').reduce((total, item) => total + item.totalPrice, 0));
      const Tax = SubTotal * 0.08;
      console.log("test");
      Dispatcher.dispatch({
        actionType: 'rendered_cart_data',
        data: {
          dataArray: get('addProductArray'),
          totalPrice: {
            totalItem : TotalItem,
            subTotal : SubTotal,
            tax : Tax,
            total : SubTotal + Tax
          }
        }
      });
    },
    delete_from_cart: function (productId) {
  
      var tempCart = get('addProductArray');
      tempCart = tempCart.filter(cartItem =>
        cartItem.productId != productId);
      set('addProductArray', tempCart);
  
      const TotalItem = Number(get('addProductArray').reduce((total, item) => total + item.orderedQuantity, 0));
      const SubTotal = Number(get('addProductArray').reduce((total, item) => total + item.totalPrice, 0));
      const Tax = SubTotal * 0.08;
      Dispatcher.dispatch({
        actionType: 'delete_successful',
        data: {
          productId: productId,
          totalPrice: {
            totalItem : TotalItem,
            subTotal : SubTotal,
            tax : Tax,
            total : SubTotal + Tax
        }
      }
      });
    }
  }
  