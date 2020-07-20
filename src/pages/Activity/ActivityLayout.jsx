import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import Header from "./components/Header/Header";
import PaginationForActivities from "./components/PageDirector/Pagination";
import SweetAlert from 'react-bootstrap-sweetalert';
import {Redirect} from 'react-router-dom'
import {getPageActivities,getNumberOfPages} from "../../helpers/ActivityAPI";
import {contentContainer} from "react-bootstrap-sweetalert/dist/styles/SweetAlertStyles";

export const ActivityLayout = () => {
    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);
    const [cards, setCards] = useState([]);
    const [currentPage,setCurrentPage] =useState(0) ;
    const [numberOfPages,setNumberOfPages] = useState(1);

    const getActivities = async () => {
        const response = await getPageActivities(currentPage, 12);
        //console.log(response?.data.content)
        setCards(response?.data?.content);
        console.log(cards)
    }

    const getNumberOfPagesWithSize12 = async () => {
        try {
            const response = await getNumberOfPages(12);
            setNumberOfPages(response.data);
        } catch (err) {
            console.log(err)
        }

    }

    /*
    async componentDidMount() {
        await this.getActivities()

    }
    */

    useEffect(()=>{async function getAll() {
        const responseAct = await getActivities()
        const response = await getNumberOfPagesWithSize12()
    }
    getAll();
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
                    return (<Redirect to='/map'/>);
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
            <Header getActivities={getActivities}/>
            <Container className="" fluid>
                <Row>
                    {cards?.map((card, index) =>
                        <Col key={index} lg={3} md={4} sm={6} xs={12}>
                            <ActivityCard getActivities={getActivities} cards={cards} setCards={setCards} card={card} setSucessAlert={setSuccessAlert}
                                          setUnsuccessAlert={setUnsuccessAlert}/>
                        </Col>)}
                </Row>
                <Row>

                </Row>
            </Container>
            <PaginationForActivities getActivities={getActivities} currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfPages={numberOfPages} className="m-1"/>
        </div>
    )
}

export default ActivityLayout;