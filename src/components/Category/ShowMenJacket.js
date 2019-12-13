import React from 'react'
import {ProductList} from '../ProductList'
import {ProductsActions} from '../../actions/productAction'
import PropTypes from 'prop-types'

class ShowMenJacket extends React.Component{
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

export default ShowMenJacket;

ShowMenJacket.propTypes = {
    menJacket: PropTypes.object
}
