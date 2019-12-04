import React from 'react'
import ProductList from './ProductList'
import {ProductsActions} from '../actions/productAction'
import PropTypes from 'prop-types'

export class ShowMenShirts extends React.Component{
    constructor(props){
        super(props);
   }
    componentDidMount(){
        console.log("did it really mount? "+this.props.menShirts);
        ProductsActions.readMenShirts();
    }
    render(){
        console.log("failure: "+this.props.menShirts.readState.failure +" success:"+ this.props.menShirts.readState.success);
        let content = '';
        if(this.props.menShirts.readState.failure){
            content = (
            <div className="alert alert-danger" role="alert">
                    Error while loading Men Shirt!
                </div>
            )
        }
        if(this.props.menShirts.readState.success){
            content = (
        <ProductList category="Men's Shirts"
        products={this.props.menShirts.menShirtList}/>
            )
        }
        return(
            <div>
                {content}
            </div>
            
        );
    }
}

export class ShowMenShoes extends React.Component{
    constructor(props){
        super(props);
   }
    componentDidMount(){
        ProductsActions.readMenShoes();
    }
    render(){
        let content = '';
        if(this.props.menShoes.readState.failure){
            content = (
            <div className="alert alert-danger" role="alert">
                    Error while loading Men Shoes!
                </div>
            )
        }
        if(this.props.menShoes.readState.success){
            content = (
                <ProductList category="Men's Shoes"
                products={this.props.menShoes.menShoeList}/>
            )
        }
        return(
            <div>
                {content}
            </div>
        );
    }
}

export class ShowMenJacket extends React.Component{
    constructor(props){
        super(props);
   }
    componentDidMount(){
        ProductsActions.readMenJacket();
    }
    render(){
        let content = '';
        if(this.props.menJacket.readState.failure){
            content = (
            <div className="alert alert-danger" role="alert">
                    Error while loading Men Jacket!
                </div>
            )
        }
        if(this.props.menJacket.readState.success){
            content = (
                <ProductList category="Men's Jacket"
                products={this.props.menJacket.menJacketList}/>
            )
        }

        return(
        <div>
            {content}
        </div>
            );
    }
}

ShowMenShirts.propTypes = {
    menShirts: PropTypes.object
}

ShowMenShoes.propTypes = {
    menShoes: PropTypes.object
}

ShowMenJacket.propTypes = {
    menJacket: PropTypes.object
}

