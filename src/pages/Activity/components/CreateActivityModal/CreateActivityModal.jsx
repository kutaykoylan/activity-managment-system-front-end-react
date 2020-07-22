import React,{useState} from "react";
import {Modal, Button} from "react-bootstrap"
import ActivityForm from "../common/ActivityForm";
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect} from "react-router-dom";
import {ActivityAPIHelper} from "../../../../helpers/ActivityAPI";

export const CreateActivityModal = (props) => {
    const[title,setTitle]=useState("title");
    const[details,setDetails]=useState("details");
    const [locationLat,setLocationLat] = useState(41.015137);
    const[locationLng,setLocationLng] = useState(28.979530)
    const[startDate,setStartDate] = useState({value:null});
    const[endDate,setEndDate] = useState({value:null});
    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);


    const handleCreate = async () =>{
        let activity;
        console.log(details+"\n"+title+"\n"+endDate+"\n"+startDate+"\n")
        if (title!=="title"&& details!=="details"&& endDate.value > startDate.value ){
            activity = {
                title: title,
                details: details,
                locationLat: locationLat,
                locationLng: locationLng,
                startDate: startDate.value,
                endDate: endDate.value
            }
            try {
                const  response = await ActivityAPIHelper.addActivity(activity);
                props.getActivities();
                setSuccessAlert(true)
            }catch (err) {
                setUnsuccessAlert(true)
            }
        }else{
            setUnsuccessAlert(true);
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
                  Activity added successfully
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
                    <Modal.Title>Create Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivityForm title = {title} setTitle={setTitle} details={details} setDetails={setDetails} locationLat={locationLat}
                    setLocationLat={setLocationLat} locationLng={locationLng} setLocationLng={setLocationLng} startDate={startDate} setStartDate={setStartDate}
                    endDate={endDate} setEndDate={setEndDate}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose} >Close</Button>
                    <Button variant="primary" onClick={handleCreate} >Create</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default CreateActivityModal;