import React,{useState} from "react";
import {Container,Row,Col} from "react-bootstrap";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import Header from "./components/Header/Header";
import PaginationForActivities from "./components/Pagination";
import SweetAlert from 'react-bootstrap-sweetalert';
import  { Redirect } from 'react-router-dom'
import {getPageActivities} from "../../helpers/ActivityAPI";

class ActivityLayout extends React.Component{
    state={
        successAlert:false,
        unsuccessAlert:false,
        cards:[]
    };
    setSuccessAlert=(arg)=>{
        this.setState({
            successAlert:arg,
            unsuccessAlert:this.state.unsuccessAlert
        })
    }
    setUnsuccessAlert=(arg)=>{
        this.setState({
            successAlert:this.state.successAlert,
            unsuccessAlert:arg
        })
    }
    setCards=(card)=>{
        this.setState({
            successAlert:this.state.successAlert,
            unsuccessAlert:this.state.unsuccessAlert,
            cards:card
        })
    }
    getActivities = async () =>{
        const response = await getPageActivities(0,12);
        console.log(response?.data.content)
        this.setCards(response?.data?.content);
        console.log(this.state.cards)
    }

    async componentDidMount() {
        await this.getActivities()

    }
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
    render() {
        return (
            <div>
                {
                    this.successAlert && <SweetAlert success title="Deleted successfully!" onConfirm={() => {this.setSuccessAlert(false);return(<Redirect to='/activities'  />);}}>
                        Login Successfully!
                    </SweetAlert>
                }
                {
                    this.unsuccessAlert && <SweetAlert warning title="Something went wrong" confirmBtnBsStyle="danger"
                                                  onConfirm={() => this.setUnsuccessAlert(false)}>
                        Please try again!
                    </SweetAlert>
                }
                <Header/>
                <Container className="d-flex" fluid>
                    <Row>
                        {this.state.cards?.map((card,index)=>
                            <Col key={index} lg={3} md={4} sm={6} xs={12}>
                                <ActivityCard card={card} setSucessAlert={this.setSuccessAlert} setUnsuccessAlert={this.setUnsuccessAlert}/>
                            </Col>)}
                    </Row>
                </Container>

                <div  className="d-flex shadow justify-content-center">
                    <PaginationForActivities className="m-1" />
                </div>

            </div>
        )
    }
}
export default ActivityLayout;