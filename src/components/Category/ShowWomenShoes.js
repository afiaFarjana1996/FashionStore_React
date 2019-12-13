import React from 'react'
import {ProductList} from '../ProductList'
import {ProductsActions} from '../../actions/productAction'
import PropTypes from 'prop-types'

class ShowWomenShoes extends React.Component{
    constructor(props){
        super(props);
   }
    componentDidMount(){
        ProductsActions.readWomenShoes();
    }
    render(){
        let content = '';
        if(this.props.womenShoe.readState.failure){
            content = (
            <div className="alert alert-danger" role="alert">
                    Error while loading Women Shoes!
                </div>
            )
        }
        if(this.props.womenShoe.readState.success){
            content = (
                <ProductList category="Women's Shoes"
                products={this.props.womenShoe.womenShoeList}/>
            )
        }

        return(
        <div>
            {content}
        </div>
            );
    }
}

export default ShowWomenShoes;

ShowWomenShoes.propTypes = {
    womenShoe: PropTypes.object
}