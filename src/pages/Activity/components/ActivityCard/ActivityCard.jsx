import React from "react";
import {Card, Button} from "react-bootstrap";
import { QuestionOutlined,SettingOutlined ,DeleteOutlined } from "@ant-design/icons";
import { IconContext } from 'react-icons';
import PreviewMapForActivityCard from "./PreviewMapForActivityCard";


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
    const update=()=>{
        console.log(props.startDate+"\t"+props.endDate);
        return(
            /**
             * TODO:There will be table for applications
             */
            <div>

            </div>
        )
    }
    const deleteCard= async ()=>{
        let activityDTO ={
            id:props.card.id,
            title:props.card.title,
            details:props.card.details,
            locationLat:props.card.locationLat,
            locationLng:props.card.locationLng,
            startDate:props.card.startDate,
            endDate:props.card.endDate
        }
        try {
            console.log("delete ")
            const response=await deleteCard(activityDTO);
            console.log(response)
            props.setSucessAlert(true);
        }catch (err) {
            props.setUnsuccessAlert(true)
        }
    }
    return (
        <div  className ="py-lg-3 px-3">
            <Card className="my-1">
                <Card.Title>{props.card.title}</Card.Title>
                <PreviewMapForActivityCard activityLocation={ {markerHorizontal:props.card.locationLat,markerVertical:props.card.locationLng}}/>
                <Card.Body>
                    <Card.Text>
                        {props.card.details}
                    </Card.Text>
                    <Card.Footer>
                        <Button  variant="outline-black" size="sm" className ="m-1" onClick={()=>seeInDetails()}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <QuestionOutlined />
                            </IconContext.Provider>
                            </Button>
                        <Button  variant="outline-black" size="sm" className ="m-1" onClick={()=>update()}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <SettingOutlined />
                            </IconContext.Provider>
                        </Button>
                        <Button  variant="outline-black" size="sm" className ="m-1" onClick={()=>deleteCard()}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <DeleteOutlined />
                            </IconContext.Provider>
                        </Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

}
export default ActivityCard;