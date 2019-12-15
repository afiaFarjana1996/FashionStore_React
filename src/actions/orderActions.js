import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios'
import CONFIG from '../config'
export const OrderActions = {
    order_confirmation : function(){
       axios.get(CONFIG.backend_url+`orderDetails`)
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