import React from 'react'
import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios'
import {get} from '../components/LruCache'

let _order = {
    order : {},
    oderStatus: {
        success: false,
        failed: false
    },
    orderDetails: []
}

export const ManageOrders = {
    create_order : function(order) {
        console.log("inside create_order method.");
        axios.post(`http://localhost:3000/orders`,order)
        .then(res => {
            console.log("inside then() after post for order");
            console.log(res);
          Dispatcher.dispatch({
              actionType: 'create_order_success',
              data: {
                orderId: res.data.insertId,
                userId:  order.userId,
                orderDate: order.orderDate
              }
          });
        })
        .catch( (error) => {
            console.log("error during creating order");
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'create_order_failed'
            });
        });

    },
    create_order_details: function(){ 
        var productsToInsert = get('addProductArray');

            productsToInsert.forEach(cartItem => {
                cartItem.orderId = 3;
                cartItem.taxes = cartItem.price * 0.08;
            })

            console.log("inside create_order_details ");
            console.log(productsToInsert);

                axios.post(`http://localhost:3000/orderDetails`,productsToInsert)
                     .then(res => {
                         console.log(res);
                     })
                     .catch( (error) => {
                        console.log(error);
                    });
            
    }
}

class InsertOrderClass extends React.Component{
    resetStatus(){
        _order.oderStatus = {
        success: false,
        failed: false
    }
}

    getAllOrders (){
       return _order;
    }
}

const InsertOrderObject = new InsertOrderClass();

Dispatcher.register( (action) => {
    switch (action.actionType){
        case 'create_order_success':
            InsertOrderObject.resetStatus();
            _order.order=action.data;
            _order.oderStatus.success = true;
            break;
        case 'create_order_failed':
            InsertOrderObject.resetStatus();
            _order.order=action.data;
            _order.oderStatus.failed = true;
            break;
        default:
            return;
    }
});

