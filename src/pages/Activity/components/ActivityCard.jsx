import React from "react";
import {Card, Button} from "react-bootstrap";
import { PlusOutlined,MoreOutlined  } from "@ant-design/icons";
import { IconContext } from 'react-icons';


const ActivityCard = (props) => {
    const seeInDetails=()=>{
        console.log(props.startDate+"\t"+props.endDate);
        return(
            /**
             * TODO:There will be table for applications
             */
            <div>

            </div>
        )
    }
    return (
        <div  className ="py-lg-3 px-3">
            <Card className="my-1">
                <Card.Title>{props.card.cardTitle}</Card.Title>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Text>
                        {props.card.cardDetails}
                    </Card.Text>
                    <Card.Footer>
                        <Button  variant="outline-black" size="sm" className ="m-1" onClick={seeInDetails}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <PlusOutlined />
                            </IconContext.Provider>
                            </Button>
                        <Button variant="success" size="sm" className ="m-1">Update</Button>
                        <Button variant="danger" size="sm" className ="m-1">Delete</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

}
export default ActivityCard;