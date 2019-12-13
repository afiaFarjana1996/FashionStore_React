import React from 'react'
import {ProductList} from '../ProductList'
import {ProductsActions} from '../../actions/productAction'
import PropTypes from 'prop-types'

class ShowMenShoes extends React.Component{
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

export default ShowMenShoes;

ShowMenShoes.propTypes = {
    menShoes: PropTypes.object
}