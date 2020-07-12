import React,{useState} from "react";
import {Modal, Button} from "react-bootstrap"
import ActivityForm from "./ActivityForm";

export const CreateActivityModal = (props) => {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
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