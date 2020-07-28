import React, {useState} from "react";
import {Card, Button} from "react-bootstrap";
import {QuestionOutlined, SettingOutlined, DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import { IconContext } from 'react-icons';
import PreviewMapForActivityCard from "./PreviewMapForActivityCard";
import {ActivityAPIHelper} from "../../../../helpers/ActivityAPI";
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect} from "react-router-dom";
import CreateActivityModal from "../CreateActivityModal/CreateActivityModal";
import UpdateActivityModal from "../UpdateActivityModal/UpdateActivityModal";
import ActivityDetailsModal from "../ActivityDetailsModal/ActivityDetailsModal";
import { UsersActivityAPIHelper } from "../../../../helpers/UsersActivitiesAPI";


const ActivityCard = (props) => {
    const[deleteAlert,setDeleteAlert] = useState(false);
    const[applyAlert,setApplyAlert] = useState(false);
    const [show, setShow] = useState(false);
    const[showForDetails,setShowForDetails] = useState(false)
    const handleClose = () => setShow(false);
    const handleCloseForDetails =()=> setShowForDetails(false)
//    UsersActivityAPIHelper.setAccessToken(acce)
    const openUpdateModal=()=>{
        setShow(true);
    }
    const openDetailsModal=()=>{
        setShowForDetails(true);
    }
    const registerActivity= async ()=>{

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
   // console.log( "card sterdate:"+Date.parse(props.card.startDate)+"\n"+ Date.parse(new Date().toDateString()));
   console.log(props.card)
    return (
        <div  className ="py-lg-3 px-3">
            <UpdateActivityModal show={show} activityCard={props.card} getActivities={props.getActivities} handleClose={handleClose}/>
            <ActivityDetailsModal show={showForDetails} activityCard={props.card} getActivities={props.getActivities} handleClose={handleCloseForDetails}/>
            {
                deleteAlert &&
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => { triggerDelete()}}
                    onCancel={()=>setDeleteAlert(false)}
                    focusCancelBtn
                >
                    You will not be able to recover this imaginary file!
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
                        <Button  variant="outline-black" size="sm" className ="m-1" onClick={()=>{openDetailsModal();UsersActivityAPIHelper.setAccessToken(localStorage.getItem('token'))}}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <QuestionOutlined />
                            </IconContext.Provider>
                            </Button>
                        {Date.parse(props.card.startDate)>= Date.parse(new Date().toDateString) && localStorage.getItem("authority") === "USER"&&
                        <Button  variant="outline-black" size="sm" className ="m-1" onClick={()=>registerActivity()}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <PlusOutlined />
                            </IconContext.Provider>
                        </Button>}
                        {Date.parse(props.card.startDate)>= Date.parse(new Date().toDateString()) && localStorage.getItem("authority") === "ADMIN" ?
                        <Button  variant="outline-black" size="sm" className ="m-1" onClick={()=>{openUpdateModal();UsersActivityAPIHelper.setAccessToken(localStorage.getItem('token'))}}>
                            <IconContext.Provider value={{ className: "global-class-name mr-2" }}>
                                <SettingOutlined />
                            </IconContext.Provider>
                        </Button>:""}
                        {Date.parse(props.card.startDate)>= Date.parse(new Date().toDateString()) && localStorage.getItem("authority") === "ADMIN" ? 
                        <Button  variant="outline-black" size="sm" className ="m-1" onClick={()=> {setDeleteAlert(true);UsersActivityAPIHelper.setAccessToken(localStorage.getItem('token'))}}>
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