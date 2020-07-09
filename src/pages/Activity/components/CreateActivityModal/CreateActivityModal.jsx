import React from "react";
import {Modal, Button} from "react-bootstrap"
import ActivityForm from "./ActivityForm";

export const CreateActivityModal = () => {
    return (
        <div>
            <Modal.Dialog>
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
            </Modal.Dialog>
        </div>
    )
}
export default CreateActivityModal;