import React from "react";
import {Form} from "react-bootstrap";
import {Calendar} from 'primereact/calendar';

class ActivityForm extends React.Component {
    state = {
        startDate: null,
        endDate: null
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="d-flex justify-content-sm-start">Activity Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" className="col-6 d-flex justify-content-sm-start"/>
                    <Form.Text className="text-muted d-flex justify-content-sm-start">
                        Tip : Give a nice name to attract people
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="d-flex justify-content-sm-start">Start Date</Form.Label>
                    <Calendar dateFormat="dd/mm/yy" className="d-flex justify-content-sm-start "
                              value={this.state.date} onChange={(e) => this.setState({startDate: e.value})}
                              showButtonBar={true}/>
                    <Form.Label className="d-flex justify-content-sm-start">End Date</Form.Label>
                    <Calendar dateFormat="dd/mm/yy" className="d-flex justify-content-sm-start "
                              value={this.state.date} onChange={(e) => this.setState({endDate: e.value})}
                              showButtonBar={true}/>
                </Form.Group>


            </Form>
        )

    }

}

export default ActivityForm;