import React from "react"
import {Modal,Button,ButtonToolbar} from 'react-bootstrap';
import PropTypes from 'prop-types'



function DeleteButton(){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <h4>Are you sure you want to delete this book?</h4> <br/><br/>
              <button className="page btn btn-sm btn-info" variant="primary" type="submit" onClick={handleClose}>
                Yes</button> 
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
                  <DeleteButton />
                   </td>
               </tr>
        
    );
}
    
ShowCart.propTypes = {
  item: PropTypes.object.isRequired
}
