import React from "react"
import {Form,Modal,Button,ButtonToolbar} from 'react-bootstrap';
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
function UpdateButton(){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <React.Fragment>
        <ButtonToolbar>
                <Button className="page btn btn-sm btn-info" variant="primary" onClick={handleShow}>
                  Update
                </Button>
                </ButtonToolbar>
          <Modal show={show} onHide={handleClose}  >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Cart Content
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          
          <Form.Group controlId="formPlaintext">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" name="quantity" placeholder="Quantity" />
          <Form.Label>Size</Form.Label>
          <Form.Control type="text" name="size" placeholder="Size" />
          </Form.Group>
          </Form>
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
                   <td>{props.item.size}</td>
                   <td>{props.item.price}</td>
                   <td>{props.item.quantity}</td>
                   <td>
                  <DeleteButton />
                   </td>
                   <td>
                   <UpdateButton/>
                   </td>
               </tr>
        
    );
    
}

ShowCart.propTypes = {
  item: PropTypes.object.isRequired
}
