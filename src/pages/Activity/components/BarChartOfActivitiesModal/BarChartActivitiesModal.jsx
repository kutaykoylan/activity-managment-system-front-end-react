import React from 'react'
import {Modal,Button} from "react-bootstrap";
import { Bar } from 'react-chartjs-2';

function BarChartActivitiesModal(props) {
    const data = [65, 59, 80, 81, 56, 55, 40];
    return (
        <div>
            <Modal size="lg" show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bar Chart of Activities</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Bar data={data} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose} >Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BarChartActivitiesModal
