import React from "react";
import {Card, Button} from "react-bootstrap";

const ActivityCard = () => {
    return (
        <div  className ="py-lg-3 px-3">
            <Card style={{width: '18rem'}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Footer>
                        <Button variant="info" className ="m-1">See in details</Button>
                        <Button variant="success" className ="m-1">Update</Button>
                        <Button variant="danger" className ="m-1">Delete</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

}
export default ActivityCard;