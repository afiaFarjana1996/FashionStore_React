import React from "react"
import {Form,Modal,Button,ButtonToolbar} from 'react-bootstrap';
import PropTypes from 'prop-types'
import {ShowCartAction} from './ShoppingCartMainPage'

function DeleteButton(props){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteProduct = () => {
      ShowCartAction.delete_from_cart(props.productId);
      
    }
    return(
        <React.Fragment>
        <ButtonToolbar>
                <Button className="page btn btn-sm btn-info" variant="primary" onClick={handleShow}>
                  Delete
                </Button>
                </ButtonToolbar>
          <Modal show={show} onHide={handleClose}  >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Delete Item
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={deleteProduct} >
            <h4>Are you sure you want to delete this book?</h4> <br/><br/>
              <Button className="page btn btn-sm btn-info" variant="primary" type="submit" onClick={handleClose}>
                Yes</Button> 
              </Form>
          </Modal.Body>
        
        </Modal>
        </React.Fragment>
    );
}

export const ShowCart= (props) => {

    return(
               <tr>
                   <td>{props.item.name}</td>
                   <td>{props.item.brand}</td>
                   <td>{props.item.price}</td>
                   <td>{props.item.quantity}</td>
                   <td>
                  <DeleteButton productId={props.item.productId}/>
                   </td>
               </tr>
        
    );
}
    
ShowCart.propTypes = {
  item: PropTypes.object.isRequired
}
DeleteButton.propTypes = {
  productId: PropTypes.number.isRequired
}


