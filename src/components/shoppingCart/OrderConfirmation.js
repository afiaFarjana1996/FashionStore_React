import React from 'react'
import PropTypes from 'prop-types';
import { OrderActions } from '../../actions/orderActions'

export class OrderConfirmation extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        OrderActions.order_confirmation();
    }
    render() {
        console.log(this.props.confirmedOrderDetails);
        return (
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th></tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

}
OrderConfirmation.propTypes = {
    orderId: PropTypes.number.isRequired
}
