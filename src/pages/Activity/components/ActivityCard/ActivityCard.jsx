import React, {useState} from "react";
import {Card, Button, Image} from "react-bootstrap";
import {QuestionOutlined, SettingOutlined, DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import {IconContext} from 'react-icons';
import PreviewMapForActivityCard from "./PreviewMapForActivityCard";
import {ActivityAPIHelper} from "../../../../helpers/APIHelpers/ActivityAPI";
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect} from "react-router-dom";
import CreateActivityModal from "../CreateActivityModal/CreateActivityModal";
import UpdateActivityModal from "../UpdateActivityModal/UpdateActivityModal";
import ActivityDetailsModal from "../ActivityDetailsModal/ActivityDetailsModal";
import {UsersActivityAPIHelper} from "../../../../helpers/APIHelpers/UsersActivitiesAPI";
import SendEmail, {getQRCode} from "../../../../helpers/APIHelpers/MailAPI";
import QRCode from "qrcode.react";

const ActivityCard = (props) => {
    ActivityAPIHelper.setAccessToken(localStorage.getItem("token"))
    UsersActivityAPIHelper.setAccessToken(localStorage.getItem("token"))

    const [deleteAlert, setDeleteAlert] = useState(false);
    const [applyAlert, setApplyAlert] = useState(false);

    const [applySuccessfullyAlert, setApplySuccessfullyAlert] = useState(false);
    const [applyUnsuccessfullyAlert, setApplyUnsuccessfullyAlert] = useState(false);

    const [qrCode, setQrCode] = useState(null)

    const [show, setShow] = useState(false);
    const [showForDetails, setShowForDetails] = useState(false)
    const handleClose = () => setShow(false);
    const handleCloseForDetails = () => setShowForDetails(false)
    //    UsersActivityAPIHelper.setAccessToken(acce)
    const openUpdateModal = () => {
        setShow(true);
    }
    const openDetailsModal = () => {
        setShowForDetails(true);
    }
    const registerActivity = async () => {
        try {
            const response = await UsersActivityAPIHelper.createUserRegistration(localStorage.getItem('username'), props.card.id);
            const responseQR = await getQRCode({
                userDTO: {
                    username: localStorage.getItem('username')
                },
                activityDTO: {
                    id: props.card.id
                }
            })
            console.log(responseQR?.data)
            setQrCode(responseQR?.data);
            console.log()
            props.getActivitiesOfUser()
            setApplySuccessfullyAlert(true);
            const responseMail = await SendEmail({
                userDTO: {
                    username: localStorage.getItem('username')
                },
                activityDTO: {
                    id: props.card.id
                }
            })
        } catch (err) {
            setApplyUnsuccessfullyAlert(true)
        }

    }


    const deleteCard = async () => {
        let activityDTO = {
            id: props.card.id,
            title: props.card.title,
            details: props.card.details,
            locationLat: props.card.locationLat,
            locationLng: props.card.locationLng,
            startDate: props.card.startDate,
            endDate: props.card.endDate
        }
        try {
            const response = await ActivityAPIHelper.deleteActivity(activityDTO);

            console.log(response)
            props.getActivities()
            props.setSucessAlert(true);
        } catch (err) {
            props.setUnsuccessAlert(true)
        }
    }
    const triggerRegister = async () => {
        setApplyAlert(false);
        const response = await registerActivity()
        return (<Redirect to='/map'/>);
    }
    const triggerDelete = async () => {
        setDeleteAlert(false);
        const response = await deleteCard()
        return (<Redirect to='/map'/>);
    }
    let activityForQR="activity : " +
        "{id: "+props.card.id+"+," +
        "title:  "+props.card.title+"," +
        "details:  "+props.card.details+"," +
        "locationLat:  "+props.card.locationLat+"," +
        "locationLng:  "+props.card.locationLng+"," +
        "startDate:  "+props.card.startDate+"," +
        "endDate:  "+props.card.endDate+"" +
        "}" +
        "user : {" +
        "username:"+localStorage.getItem('username')+
        "}"
    return (
        <div className="py-lg-3 px-3">
            <UpdateActivityModal show={show} activityCard={props.card} getActivities={props.getActivities}
                                 handleClose={handleClose}/>
            <ActivityDetailsModal show={showForDetails} activityCard={props.card} getActivities={props.getActivities}
                                  handleClose={handleCloseForDetails}/>
            {
                applySuccessfullyAlert &&
                <SweetAlert success title="Activity is added to your activities!" onConfirm={() => {
                    setApplySuccessfullyAlert(false);
                    return (<Redirect to='/map'/>);
                }}>
                    <div className="d-flex justify-content-center">
                        <QRCode value={activityForQR}/>
                    </div>
                    <br/>
                    (QR code is sent to your email)
                </SweetAlert>
            }
            {
                applyUnsuccessfullyAlert && <SweetAlert warning title="Something went wrong" confirmBtnBsStyle="danger"
                                                        onConfirm={() => setApplyUnsuccessfullyAlert(false)}>
                    Please try again!
                </SweetAlert>
            }
            {
                deleteAlert &&
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => {
                        triggerDelete()
                    }}
                    onCancel={() => setDeleteAlert(false)}
                    focusCancelBtn
                >
                    You will not be able to recover this activity!
                </SweetAlert>
            }
            {
                applyAlert &&
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, register!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => {
                        triggerRegister()
                    }}
                    onCancel={() => setApplyAlert(false)}
                    focusCancelBtn
                >
                    Have fun!
                </SweetAlert>
            }
            <Card className="my-1">
                <Card.Title>{props.card.title}</Card.Title>
                <PreviewMapForActivityCard activityLocation={{
                    markerHorizontal: props.card.locationLat,
                    markerVertical: props.card.locationLng
                }}/>
                <Card.Body>
                    <Card.Text>
                        {props.card.details}
                    </Card.Text>
                    <Card.Footer>
                        <Button variant="outline-black" size="sm" className="m-1" onClick={() => {
                            openDetailsModal()
                        }}>
                            <IconContext.Provider value={{className: "global-class-name mr-2"}}>
                                <QuestionOutlined/>
                            </IconContext.Provider>
                        </Button>
                        {Date.parse(props.card.startDate) >= Date.parse(new Date().toDateString()) && localStorage.getItem('authority') === "USER" &&
                        props.isPlusVisible &&
                        <Button variant="outline-black" size="sm" className="m-1" onClick={() => {
                            setApplyAlert(true)
                        }}>
                            <IconContext.Provider value={{className: "global-class-name mr-2"}}>
                                <PlusOutlined/>
                            </IconContext.Provider>
                        </Button>}
                        {Date.parse(props.card.startDate) >= Date.parse(new Date().toDateString()) && localStorage.getItem('authority') === "ADMIN" ?
                            <Button variant="outline-black" size="sm" className="m-1" onClick={() => {
                                openUpdateModal()
                            }}>
                                <IconContext.Provider value={{className: "global-class-name mr-2"}}>
                                    <SettingOutlined/>
                                </IconContext.Provider>
                            </Button> : ""}
                        {Date.parse(props.card.startDate) >= Date.parse(new Date().toDateString()) && localStorage.getItem('authority') === "ADMIN" ?
                            <Button variant="outline-black" size="sm" className="m-1" onClick={() => {
                                setDeleteAlert(true)
                            }}>
                                <IconContext.Provider value={{className: "global-class-name mr-2"}}>
                                    <DeleteOutlined/>
                                </IconContext.Provider>
                            </Button> : ""}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

}
export default ActivityCard;