import React,{useState} from "react";
import {Modal, Button} from "react-bootstrap"
import ActivityForm from "../common/ActivityForm";
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect} from "react-router-dom";
import {ActivityAPIHelper} from "../../../../helpers/ActivityAPI";

export const UpdateActivityModal = (props) => {
    const[title,setTitle]=useState(props.activityCard.title);
    const[details,setDetails]=useState(props.activityCard.details);
    const [locationLat,setLocationLat] = useState(props.activityCard.locationLat);
    const[locationLng,setLocationLng] = useState(props.activityCard.locationLat)
    const[startDate,setStartDate] = useState({value:props.activityCard.startDate});
    const[endDate,setEndDate] = useState({value:props.activityCard.endDate});
    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);

    const update=async ()=>{
        let activityDTO ={
            id:props.activityCard.id,
            title:title,
            details:details,
            locationLat:locationLat,
            locationLng:locationLng,
            startDate:startDate.value,
            endDate:endDate.value
        }
        try {
            const response=await ActivityAPIHelper.updateActivity(activityDTO);
            console.log(response)
            props.getActivities()
            setSuccessAlert(true);
        }catch (err) {
            setUnsuccessAlert(true)
        }
    }
    const onConfirm= () =>{
        setSuccessAlert(false);
        props.handleClose();
        return(
            <Redirect to='/activities'/>
        );
    }
    return (
        <div>
            {
                successAlert && <SweetAlert success title="Congrats!" onConfirm={onConfirm}>
                    Activity updated successfully
                </SweetAlert>
            }
            {
                unsuccessAlert && <SweetAlert warning title="Some fields are mistaken!" confirmBtnBsStyle="danger"
                                              onConfirm={() =>{ setUnsuccessAlert(false)}}>
                    Please try again!
                </SweetAlert>
            }
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivityForm title = {title} setTitle={setTitle} details={details} setDetails={setDetails} locationLat={locationLat}
                                  setLocationLat={setLocationLat} locationLng={locationLng} setLocationLng={setLocationLng} startDate={startDate} setStartDate={setStartDate}
                                  endDate={endDate} setEndDate={setEndDate}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose} >Close</Button>
                    <Button variant="primary" onClick={()=>{update()}} >Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default UpdateActivityModal;