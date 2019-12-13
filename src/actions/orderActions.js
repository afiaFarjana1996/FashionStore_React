import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios'

export const OrderActions = {
    order_confirmation : function(){
       axios.get(`http://localhost:3000/orderDetails`)
       .then(res => {
        Dispatcher.dispatch({
            actionType: 'read_order_confirmation_success',
            data: res.data
        });
  
       })
       .catch(error =>{
           console.log(error);
           Dispatcher.dispatch({
               actionType:'read_order_confirmation_failed'
           });
       });
        
    }
}