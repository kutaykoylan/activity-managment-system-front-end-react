import React,{useState} from "react";
import {Modal, Button} from "react-bootstrap"
import ActivityForm from "../common/ActivityForm";
import {TabMenu} from 'primereact/tabmenu';
import {Redirect} from "react-router-dom";
import { UsersActivityAPIHelper } from "../../../../helpers/UsersActivitiesAPI";
import UsersOfActivitiesTable from "./components/UsersOfActivitiesTable";
import ChartForRegistrationDates from "./components/ChartForRegistrationDates";
import ActivityDetails from "./components/ActivityDetails";

export const ActivityDetailsModal=(props)=>{
    let items;
    if( localStorage.getItem('authority') === "ADMIN" ){
         items=[
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'User registration dates', icon: 'pi pi-fw pi-calendar'},
            {label: 'Details of registered users', icon: 'pi pi-fw pi-file'},
        ]
    }else{
         items=[
            {label: 'Home', icon: 'pi pi-fw pi-home'}
        ]
    }
    
    const[activeItem,setActiveItem]=useState(items[0]);
    const[homeTab,setHomeTab]=useState(true);
    const[detailsTab,setDetailsTab]=useState(false);
    const[datesTab,setDatesTab]=useState(false);

    const onConfirm= () =>{
        props.handleClose();
        return(
            <Redirect to='/activities'/>
        );
    }
    const setTab=(item)=>{
        if(item===items[0]){
            setHomeTab(true)
            setDatesTab(false)
            setDetailsTab(false)
            
        }else if(item===items[1]){
            setHomeTab(false)
            setDatesTab(true)
            setDetailsTab(false)
        }else if(item===items[2]){
            setHomeTab(false)
            setDatesTab(false)
            setDetailsTab(true)
        }
    }
    return (
        <div>
            <Modal size="lg" show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Activity Details</Modal.Title>
                </Modal.Header>
                <TabMenu model={items} activeItem={activeItem} onTabChange={(e) =>{setTab(e.value); setActiveItem( e.value);} }/>
                <Modal.Body>
               {homeTab &&  <div><ActivityDetails activityCard={props.activityCard}/></div>}
               {datesTab && localStorage.getItem('authority') === "ADMIN" && <div><ChartForRegistrationDates/></div>}
               {detailsTab &&  localStorage.getItem('authority') === "ADMIN" && <div><UsersOfActivitiesTable activityCard={{id:props.activityCard.id}}/></div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose} >Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ActivityDetailsModal; 