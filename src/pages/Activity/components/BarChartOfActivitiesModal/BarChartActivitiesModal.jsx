import React, { useState,useEffect } from 'react'
import { Modal, Button } from "react-bootstrap";
import { Bar } from 'react-chartjs-2';
import { ActivityAPIHelper } from '../../../../helpers/APIHelpers/ActivityAPI';
import { UsersActivityAPIHelper } from '../../../../helpers/APIHelpers/UsersActivitiesAPI';


function BarChartActivitiesModal(props) {
    const[allActivities,setAllActivities] = useState([]);
    const[numberOfRegistration,setNumberOfRegistration] = useState([]);

    const getRegistrationNumberOfActivities=async ()=>{
        try {
            const response = await ActivityAPIHelper.getAllActivities();
            for (let i=0;i<response?.data.length;i++){
                allActivities.push(response?.data[i].title);
                try {
                    const responseNumber = await UsersActivityAPIHelper.getUsersOfActivity({ id: response?.data[i].id});
                    //console.log(response.data[i].title +"==>"+responseNumber?.data.length)
                    numberOfRegistration.push(responseNumber?.data.length)
                } catch (err) {
                    console.log(err);
                }
            }
        } catch (err) {
            console.log(err);
        }
        
    }



    useEffect(() => {
        async function getAll() {
            const response = await getRegistrationNumberOfActivities();
        }

        getAll();
    }, []);

    const data = {
        labels:allActivities,
        datasets: [
          {
            label: 'Number Of Registrations',
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: numberOfRegistration
          }
        ]
      };
    return (
        <div>
            {console.log(allActivities+"\t"+numberOfRegistration)}
            <Modal size="lg" show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bar Chart of Activities</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Bar data={data} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose} >Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BarChartActivitiesModal
