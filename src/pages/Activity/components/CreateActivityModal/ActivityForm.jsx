import React,{useState} from "react";
import {Form} from "react-bootstrap";
import {Calendar} from 'primereact/calendar';
import MapForCard from "./MapForCard";

export const ActivityForm = (props) => {
        return (
            <Form>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label className="d-flex justify-content-sm-start">Activity Title</Form.Label>
                    <Form.Control type="name" onChange={e => props.setTitle(e.target.value)} placeholder={props.title} className="col-6 d-flex justify-content-sm-start"/>
                    <Form.Text className="text-muted d-flex justify-content-sm-start">
                        Tip : Give a nice name to attract people
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicDetails">
                    <Form.Label className="d-flex justify-content-sm-start">Activity details</Form.Label>
                    <Form.Control onChange={e => props.setDetails(e.target.value)} type="name" placeholder={props.details} className="col-6 d-flex justify-content-sm-start"/>
                    <Form.Text className="text-muted d-flex justify-content-sm-start">
                       Please enter a short sentence to define your activity
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="d-flex justify-content-sm-start">Start Date</Form.Label>
                    <Calendar dateFormat="dd/mm/yy" className="d-flex justify-content-sm-start "
                              value={props.startDate} onChange={(e) => {props.setStartDate(e)}}
                              showButtonBar={true}/>
                    <Form.Label className="d-flex justify-content-sm-start">End Date</Form.Label>
                    <Calendar dateFormat="dd/mm/yy" className="d-flex justify-content-sm-start "
                              value={props.endDate} onChange={(e) =>{props.setEndDate(e)}}
                              showButtonBar={true}/>
                              <br/>
                              <MapForCard markerHorizontal={props.locationLat} setMarkerHorizontal={props.setLocationLat} markerVertical={props.locationLng} setMarkerVertical={props.setLocationLng}  />
                </Form.Group>
            </Form>
        )

}

export default ActivityForm;