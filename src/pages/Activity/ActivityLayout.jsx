import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import Header from "./components/Header/Header";
import PaginationForActivities from "./components/Pagination";
import SweetAlert from 'react-bootstrap-sweetalert';
import {Redirect} from 'react-router-dom'
import {getPageActivities} from "../../helpers/ActivityAPI";

export const ActivityLayout=()=>{
    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);
    const [cards,setCards]=useState([]);

    const getActivities = async () => {
        const response = await getPageActivities(0, 12);
        //console.log(response?.data.content)
        setCards(response?.data?.content);
        console.log(cards)
    }

    const getNumberOfPages = async () =>{
        try{
            const response = await getNumberOfPages(12);
            console.log(response)
        }catch (err) {
           console.log(err)
        }

    }

    /*
    async componentDidMount() {
        await this.getActivities()

    }
    */

    useEffect(async () => {
        await getActivities()
    }, []);

    /*

    async componentDidUpdate() {
        const response = await getPageActivities(0, 12);
        if (this.state.cards.length < response?.data?.content.size)
            await this.getActivities()
    }

     */

    /*
        {
        cardTitle:"Card Title"
        ,cardDetails:"Details are shown here"
        ,activityLocation:{
            markerHorizontal:41.015137
            ,markerVertical:28.979530
        }
        ,startDate:new Date().toLocaleString()
        ,endDate:new Date().toLocaleString()
    }
    */
        return (
            <div>
                {
                    successAlert && <SweetAlert success title="Deleted successfully!" onConfirm={() => {
                        setSuccessAlert(false);
                        return (<Redirect to='/activities'/>);
                    }}>
                        Login Successfully!
                    </SweetAlert>
                }
                {
                    unsuccessAlert && <SweetAlert warning title="Something went wrong" confirmBtnBsStyle="danger"
                                                       onConfirm={() => setUnsuccessAlert(false)}>
                        Please try again!
                    </SweetAlert>
                }
                <Header/>
                <Container className="" fluid>
                    <Row>
                        {cards?.map((card, index) =>
                            <Col key={index} lg={3} md={4} sm={6} xs={12}>
                                <ActivityCard card={card} setSucessAlert={setSuccessAlert}
                                              setUnsuccessAlert={setUnsuccessAlert}/>
                            </Col>)}
                    </Row>
                    <Row>

                    </Row>
                </Container>

                <div className="d-flex shadow justify-content-center">
                    <PaginationForActivities getNumberOfPages={getNumberOfPages} className="m-1"/>
                </div>

            </div>
        )
}

export default ActivityLayout;