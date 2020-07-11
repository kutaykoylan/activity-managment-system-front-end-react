import React,{useState} from "react";
import {Modal, Button} from "react-bootstrap"
import ActivityForm from "./ActivityForm";

export const CreateActivityModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <div>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivityForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger">Close</Button>
                    <Button variant="primary">Create</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default CreateActivityModal;