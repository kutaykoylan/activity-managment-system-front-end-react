import React from 'react'
import { Container, Row, Col, Alert } from "react-bootstrap";
import ActivityCard from '../ActivityCard/ActivityCard';
import image1 from "../../../../emptyActivitiesPage.jpg";
function MyActivities(props) {
    const isPlusVisible=false;
    return (
        <div>
            <Container className="" fluid>
                <Row>
                    {(typeof props.cards === 'undefined' || props.cards.length === 0) ?
                        <div>
                            <Alert className="position-absolute col-12" variant="dark">
                                Unfortunately, This page has been quite silent :(
                            </Alert>
                            <img className="img-fit " src={image1} />
                        </div>
                        :  props.cards?.map((card, index) =>
                            <Col key={index} lg={3} md={4} sm={6} xs={12}>
                                <ActivityCard getActivities={ props.getActivities} isPlusVisible={isPlusVisible} cards={ props.cards} setCards={ props.setCards}
                                    card={card} setSucessAlert={ props.setSuccessAlert}
                                    setUnsuccessAlert={ props.setUnsuccessAlert} />
                            </Col>)
                    }
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    )
}

export default MyActivities
