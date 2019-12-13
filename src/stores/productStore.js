import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _productStore = {
    menShirts:{
        menShirtList: [],
        readState:{
            success:false,
            failure:false
        },
        error: ''
    },
    menShoes:{
        menShoeList: [],
        readState:{
            success:false,
            failure:false
        },
        error: ''
    },
    womenShoe:{
        womenShoeList: [],
        readState:{
            success:false,
            failure:false
        },
        error: ''
    },
    menJacket:{
        menJacketList: [],
        readState:{
            success:false,
            failure:false
        },
        error: ''
    }

};

class ProductStoreClass extends EventEmitter{

    addChangeListener(cb){
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb){
        this.removeListener(CHANGE_EVENT, cb);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }


    getAllMenShirts(){
        return _productStore.menShirts;
    }

    getAllMenShoes(){
        return _productStore.menShoes;
    }

    getAllWomenShoe(){
        return _productStore.womenShoe;
    }

    getAllMenJacket(){
        return _productStore.menJacket;

    }

    resetReadState(){
        _productStore.menShirts.readState = {
            success:false,
            failure:false
          }
          _productStore.menShoes.readState = {
            success:false,
            failure:false
          }
          _productStore.womenShoe.readState = {
            success:false,
            failure:false
          }
          _productStore.menJacket.readState = {
            success:false,
            failure:false
          }
    }
    
}

const ProductStore = new ProductStoreClass();

Dispatcher.register( (action) => {

    switch (action.actionType){
        case 'read_menShirts_successful':
            ProductStore.resetReadState();
            _productStore.menShirts.menShirtList = action.data;
            _productStore.menShirts.menShirtList.forEach(list => list.orderedQuantity = 1);
            _productStore.menShirts.readState.success = true;
            ProductStore.emitChange();
            break;
        case 'read_menShirts_failure':
            ProductStore.resetReadState();
            _productStore.menShirts.readState.failure = true;
            ProductStore.emitChange();
            break;
        case 'read_menShoes_successful':
            ProductStore.resetReadState();
            _productStore.menShoes.menShoeList= action.data;
            _productStore.menShoes.readState.success = true;
            ProductStore.emitChange();
            break;
        case 'read_menShoes_failure':
            ProductStore.resetReadState();
            _productStore.menShoes.readState.failure = true;
            ProductStore.emitChange();
            break;
        case 'read_womenShoe_successful':
            ProductStore.resetReadState();
            _productStore.womenShoe.womenShoeList= action.data;
            _productStore.womenShoe.readState.success = true;
            ProductStore.emitChange();
            break;
        case 'read_womenShoe_failure':
            ProductStore.resetReadState();
            _productStore.womenShoe.readState.failure = true;
            ProductStore.emitChange();
            break;
        case 'read_menJacket_successful':
            ProductStore.resetReadState();
            _productStore.menJacket.menJacketList= action.data;
            _productStore.menJacket.readState.success = true;
            ProductStore.emitChange();
            break;
        case 'read_menJacket_failure':
            ProductStore.resetReadState();
            _productStore.menJacket.readState.failure = true;
            ProductStore.emitChange();
            break;
        default:
            return;
    }
} );

export default ProductStore;