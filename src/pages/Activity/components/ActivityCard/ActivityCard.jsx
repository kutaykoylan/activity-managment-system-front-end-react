import React, {useState} from "react";
import {Card, Button} from "react-bootstrap";
import { QuestionOutlined,SettingOutlined ,DeleteOutlined } from "@ant-design/icons";
import { IconContext } from 'react-icons';
import PreviewMapForActivityCard from "./PreviewMapForActivityCard";
import {ActivityAPIHelper} from "../../../../helpers/ActivityAPI";
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect} from "react-router-dom";
import CreateActivityModal from "../CreateActivityModal/CreateActivityModal";
import UpdateActivityModal from "../UpdateActivityModal/UpdateActivityModal";


const ActivityCard = (props) => {
    const[deleteAlert,setDeleteAlert] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const openUpdateModal=()=>{
        setShow(true);
    }
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
            const response=await ActivityAPIHelper.deleteActivity(activityDTO);

            console.log(response)
            /**
             *TODO: card state will be updated
             *   let cardsTemp =[...props.cards]
             cardsTemp.filter((element)=>{
                return element.id===props.card.id;
            })
             */
            props.getActivities()
            props.setSucessAlert(true);
        }catch (err) {
            props.setUnsuccessAlert(true)
        }
    }
    const triggerDelete= async  ()=>{
        setDeleteAlert(false);
        const response = await deleteCard()
        return (<Redirect to='/map'/>);
    }
    return (
        <div  className ="py-lg-3 px-3">
            <UpdateActivityModal show={show} activityCard={props.card} getActivities={props.getActivities} handleClose={handleClose}/>
            {
                deleteAlert && <SweetAlert warning title="Are you sure you want to delete this activity?" onConfirm={() => { triggerDelete()}}>
                </SweetAlert>
            }
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
                        {Date.parse(props.card.startDate)>= new Date().getTimezoneOffset()/60 ?<Button  variant="outline-black" size="sm" className ="m-1" onClick={()=>{openUpdateModal()}}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <SettingOutlined />
                            </IconContext.Provider>
                        </Button>:""}
                        {Date.parse(props.card.startDate)>= new Date().getTimezoneOffset()/60 ? <Button  variant="outline-black" size="sm" className ="m-1" onClick={()=> {setDeleteAlert(true)}}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <DeleteOutlined />
                            </IconContext.Provider>
                        </Button>:""}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

}
export default ActivityCard;