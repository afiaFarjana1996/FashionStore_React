import Dispatcher from '../dispatcher/appDispatcher';
import {get,set,isCacheEmpty} from '../components/LruCache'
import {setCookie,loadCookie,removeCookie} from '../components/cookie'
import cookie from 'react-cookies'
export const ShowCartAction ={
 
    render_cart: function () {
      var cart = cookie.load('cartData');
      const TotalItem = Number(cart.reduce((total, item) => total + item.orderedQuantity, 0));
      const SubTotal = Number(cart.reduce((total, item) => total + item.totalPrice, 0));
      const Tax = SubTotal * 0.08;
      console.log("test");
      Dispatcher.dispatch({
        actionType: 'rendered_cart_data',
        data: {
          dataArray: cart,
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
      console.log("Inside delete cart action method: ");
      var tempCart = cookie.load('cartData');
      console.log(tempCart);
      tempCart = tempCart.filter(cartItem =>
        cartItem.productId != productId);
        setCookie('cartData',tempCart);
        console.log(cookie.load('cartData'));
  
      const TotalItem = Number(loadCookie('cartData').reduce((total, item) => total + item.orderedQuantity, 0));
      const SubTotal = Number(loadCookie('cartData').reduce((total, item) => total + item.totalPrice, 0));
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
  