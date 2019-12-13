import React from 'react'
import {ProductList} from '../ProductList'
import {ProductsActions} from '../../actions/productAction'
import PropTypes from 'prop-types'

class ShowMenShirts extends React.Component{
    constructor(props){ 
        super(props);
   }
    componentDidMount(){
        ProductsActions.readMenShirts();
    }
    render(){
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
export default ShowMenShirts;

ShowMenShirts.propTypes = {
    menShirts: PropTypes.object
}