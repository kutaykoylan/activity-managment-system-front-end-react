import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import PaginationForActivities from "./components/PageDirector/Pagination";
import SweetAlert from 'react-bootstrap-sweetalert';
import {Redirect} from 'react-router-dom'
import {ActivityAPIHelper} from "../../helpers/APIHelpers/ActivityAPI";
import ActivityDisplay from "./components/Activities/ActivityDisplay";
import CoolTabs from 'react-cool-tabs';
import MyActivities from "./components/MyActivties/MyActivities";
import {UsersActivityAPIHelper} from "../../helpers/APIHelpers/UsersActivitiesAPI";

export const ActivityLayout = () => {
    const [successAlert, setSuccessAlert] = useState(false);
    const [unsuccessAlert, setUnsuccessAlert] = useState(false);
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(1);

    const [cardsForMyActivities, setCardsForMyActivities] = useState([]);

    const getActivitiesOfUser = async () => {
        if (localStorage.getItem("authority") === "USER") {
            const user = {
                username: localStorage.getItem('username')
            }
            try {
                const response = await UsersActivityAPIHelper.getActivitiesOfUser(user);
                setCardsForMyActivities(response?.data);
            } catch (e) {
                setCardsForMyActivities([]);
            }
        }
    }


    const getActivities = async () => {
        try {
            console.log(currentPage)
            const response = await ActivityAPIHelper.getPageActivities(currentPage, 12);
            setCards(response?.data?.content);
        } catch (e) {
            setCards([]);
        }

    }

    const getNumberOfPagesWithSize12 = async () => {
        try {
            const response = await ActivityAPIHelper.getNumberOfPages(12);
            setNumberOfPages(response.data);
        } catch (err) {
            console.log(err)
        }

    }
    const nextPage =async () => {
        console.log("this is next page")
        var nextPage = currentPage + 1;
        setCurrentPage(nextPage)
      //  setCards([])
        await getActivities()
    }
    const prevPage = async () => {
        var prevPage = currentPage - 1
        setCurrentPage(prevPage)
        //setCards([])
        await getActivities()
    }

    useEffect(() => {
        async function getAll() {
        //    const pagenum = currentPage;
            const responseAct = await getActivities()
            const response = await getNumberOfPagesWithSize12()
            const responseMY = await getActivitiesOfUser()
        }

        getAll();
    }, []);


    return (
        <div className="d-inline">
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
            {localStorage.getItem("authority") === "USER" ?
                <CoolTabs className="col-12 position-absoulute"
                          tabKey={'1'}
                          style={{width: 1920, height: 1150, background: 'white'}}
                          activeTabStyle={{background: 'white', color: 'black'}}
                          unActiveTabStyle={{background: 'white', color: 'black'}}
                          activeLeftTabBorderBottomStyle={{background: 'blue', height: 4}}
                          activeRightTabBorderBottomStyle={{background: 'blue', height: 4}}
                          tabsBorderBottomStyle={{background: 'gray', height: 4}}
                          leftContentStyle={{background: 'white'}}
                          rightContentStyle={{background: 'white'}}
                          leftTabTitle={'Activities'}
                          rightTabTitle={'My Activities'}
                          leftContent={<ActivityDisplay cards={cards} cardsForMyActivities={cardsForMyActivities}
                                                        getActivities={getActivities}
                                                        getActivitiesOfUser={getActivitiesOfUser} setCards={setCards}
                                                        setSuccessAlert={setSuccessAlert}
                                                        setUnsuccessAlert={setUnsuccessAlert}/>}
                          rightContent={<MyActivities cards={cardsForMyActivities} getActivities={getActivitiesOfUser}
                                                      setCards={setCardsForMyActivities}
                                                      setSuccessAlert={setSuccessAlert}
                                                      setUnsuccessAlert={setUnsuccessAlert}/>}
                          contentTransitionStyle={'transform 0.6s ease-in'}
                          borderTransitionStyle={'all 0.6s ease-in'}/> :
                <ActivityDisplay cards={cards} getActivities={getActivities} setCards={setCards}
                                 setSuccessAlert={setSuccessAlert}
                                 setUnsuccessAlert={setUnsuccessAlert}/>
            }

            <br/>
            <br/>
            <br/>

            <PaginationForActivities className="position-relative" getActivities={getActivities}
                                     currentPage={currentPage}
                                     setCurrentPage={setCurrentPage} numberOfPages={numberOfPages}
                                     nextPage={nextPage} prevPage={prevPage} className="m-1"/>
        </div>
    )
}

export default ActivityLayout;