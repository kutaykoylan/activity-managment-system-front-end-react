import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import ActivityCard from "./components/ActivityCard";
import Header from "./components/Header/Header";
import CreateActivityModal from "./components/CreateActivityModal/CreateActivityModal";

const ActivityLayout = () => {
    const card={
        cardTitle:"Card Title"
        ,cardDetails:"Details are shown here"
        ,startDate:new Date().toLocaleString()
        ,endDate:new Date().toLocaleString()
        ,location:null
    }
    return (
        <div>
            <Header/>
            <Container className="d-flex" fluid>
                <Row>

                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col> <Col lg={3} md={4} sm={6} xs={12}>
                    <ActivityCard card={card}/>
                </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <ActivityCard card={card}/>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default ActivityLayout;