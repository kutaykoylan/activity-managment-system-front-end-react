import { BASE_URL } from "../config";
import axios from "axios";

class UsersActivityAPI {
    accessToken;

    constructor() {
        this.accessToken="";
    }

    setAccessToken=(token)=>{
        this.accessToken =  token;
    }

    getUsersOfActivity = async (activity) => {
        let response;
        //console.log(activity)
        try {
            if(this.accessToken==="")
            {   
               // console.log(this.accessToken)
                console.log("without access token")
                 response = await axios.get(BASE_URL + 'usersActivities/users/'+activity.id)
            }else {
                console.log("with access token")
                console.log(this.accessToken)
                 response = await axios.get(BASE_URL + 'usersActivities/users/'+activity.id , {
                    headers: {
                        "Authorization": `Bearer ${this.accessToken}`,
                    }
                });
            }
            return response;
            console.log(response)
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    getActivitiesOfUser = async (user) => {
        try {
            const response = await axios.get(BASE_URL + 'usersActivities/activities/'+user.username,{
                headers: {
                    "Authorization": `Bearer ${this.accessToken}`,
                }
            });
            return response;
        } catch (error) {
            return null;
        }
    }

    createUserRegistration = async (username,activityID) =>{
        const UsersActivityDTO = {
            UserDTO:{
                username:username
            }
            ,ActivityDTO:{
                id:activityID
            }
        }
        try {
            const response = await axios.post(BASE_URL + 'usersActivities/create', UsersActivityDTO);
            return response;
        } catch (error) {
            return null;
        }
    }

    deleteRegistrationOfUser = async (username,activityID) => {
        const UsersActivity = {
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            },
            UsersActivityDTO: {
                UserDTO:{
                    username:username
                }
                ,ActivityDTO:{
                    id:activityID
                }
            }
        }
        try {
            const response = await axios.delete(BASE_URL + 'usersActivities/delete', UsersActivity);
            return response;
        } catch (error) {
            return null;
        }
    }
}

export const UsersActivityAPIHelper = new UsersActivityAPI();