import React,{useState} from "react";
import {Container,Row,Col} from "react-bootstrap";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import Header from "./components/Header/Header";
import PaginationForActivities from "./components/Pagination";
import SweetAlert from 'react-bootstrap-sweetalert';
import  { Redirect } from 'react-router-dom'

const ActivityLayout = () => {
    const[successAlert,setSuccessAlert] =useState(false);
    const[unsuccessAlert,setUnsuccessAlert] =useState(false);

    const card={
        cardTitle:"Card Title"
        ,cardDetails:"Details are shown here"
        ,activityLocation:{
            markerHorizontal:41.015137
            ,markerVertical:28.979530
        }
        ,startDate:new Date().toLocaleString()
        ,endDate:new Date().toLocaleString()
        ,location:null
    }
    return (
        <div>
            {
                successAlert && <SweetAlert success title="Deleted successfully!" onConfirm={() => {setSuccessAlert(false);return(<Redirect to='/activities'  />);}}>
                    Login Successfully!
                </SweetAlert>
            }
            {
                unsuccessAlert && <SweetAlert warning title="Something went wrong" confirmBtnBsStyle="danger"
                                              onConfirm={() => setUnsuccessAlert(false)}>
                    Please try again!
                </SweetAlert>
            }
            <Header/>
            <Container className="d-flex" fluid>
                <Row>

                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col> <Col lg={3} md={4} sm={6} xs={12}>
                    <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card} setSucessAlert={setSuccessAlert} setUnsuccessAlert={setUnsuccessAlert}/>
                    </Col>

                </Row>
            </Container>

            <div  className="d-flex justify-content-center">
                <PaginationForActivities/>
            </div>

        </div>
    )
}
export default ActivityLayout;