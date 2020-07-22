import { BASE_URL } from "../config";
import axios from "axios";

class ActivityAPI {
    accessToken;

    constructor() {
        this.accessToken="";
    }

    setAccessToken=(token)=>{
        this.accessToken =  token;
    }

    getNumberOfPages = async (pageSize) => {
        try {
            //activity/numberOfPages?pageSize=12
            let response;
            if(this.accessToken==="")
            {
                 response = await axios.get(BASE_URL + 'activity/numberOfPages?pageSize=' + pageSize)
            }else {
                 response = await axios.get(BASE_URL + 'activity/numberOfPages?pageSize=' + pageSize, {
                    headers: {
                        "Authorization": `Bearer ${this.accessToken}`,
                    }
                });
            }
            return response;
        } catch (error) {
            return 0;
        }

    }


    getPageActivities = async (pageNumber, pageSize) => {
        try {
            let response;
            if(this.accessToken==="") {
                response = await axios.get(BASE_URL + 'activity/pages/' + pageNumber + '?numberOfActivities=' + pageSize)
            } else{
                     response = await axios.get(BASE_URL + 'activity/pages/' + pageNumber + '?numberOfActivities=' + pageSize, {
                        headers: {
                            "Authorization": `Bearer ${this.accessToken}`,
                        }
                    });
                }
            return response;
        } catch (error) {
            return null;
        }
    }

    getAllActivities = async () => {
        try {
            const response = await axios.get(BASE_URL + 'activity/allActivities',{
                headers: {
                    "Authorization": `Bearer ${this.accessToken}`,
                }
            });
            return response;
        } catch (error) {
            return null;
        }
    }


    getActivityWithID = async (id) => {
        try {
            const response = await axios.get(BASE_URL + 'activity/allActivities/' + id,{
                headers: {
                    "Authorization": `Bearer ${this.accessToken}`,
                }
            });
            return response;
        } catch (error) {
            return null;
        }
    }

    addActivity = async (activity) => {
        console.log(activity)
        const formData = {
            id: 0,
            title: activity.title,
            details: activity.details,
            locationLat: activity.locationLat,
            locationLng: activity.locationLng,
            startDate: activity.startDate,
            endDate: activity.endDate
        };
        try {
            const response = await axios.post(BASE_URL + 'activity/add', formData,{
                headers: {
                    "Authorization": `Bearer ${this.accessToken}`,
                }
            });
            return response;
            console.log(response)
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    updateActivity = async (activity) => {
        try {
            const response = await axios.patch(BASE_URL + 'activity/update', activity,{
                headers: {
                    "Authorization": `Bearer ${this.accessToken}`,
                }
            });
            return response;
        } catch (error) {
            return null;
        }
    }

    deleteActivity = async (activity) => {
        const form = {
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            },
            data: activity
        }
        console.log(activity)
        try {
            const response = await axios.delete(BASE_URL + 'activity/delete', form);
            return response;
        } catch (error) {
            return null;
        }
    }
}

export const ActivityAPIHelper = new ActivityAPI();