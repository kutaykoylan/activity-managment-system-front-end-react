import { BASE_URL } from "../../config";
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
        try {
            if(this.accessToken==="")
            {   
                 response = await axios.get(BASE_URL + 'usersActivities/users/'+activity.id)
            }else {
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
        let response;
        try {
            if(this.accessToken==="")
            {   
                 response = await axios.get(BASE_URL + 'usersActivities/activities/'+user.username)
            }else {
                 response = await axios.get(BASE_URL + 'usersActivities/activities/'+user.username , {
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
    getNumberOfRegistrationByDates = async (activityID) => {
        let response;
        try {
            if(this.accessToken==="")
            {   
                 response = await axios.get(BASE_URL + 'usersActivities/numberOfRegistrationByDates/'+activityID)
            }else {
                 response = await axios.get(BASE_URL + 'usersActivities/numberOfRegistrationByDates/'+activityID , {
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

    createUserRegistration = async (username,activityID) =>{
        const UsersActivityDTO = {
            userID:{
                username:username
               }
               ,activityID:{
                id:activityID
               }
        }
        try {
            const response = await axios.post(BASE_URL + 'usersActivities/create', UsersActivityDTO,{
                headers: {
                    "Authorization": `Bearer ${this.accessToken}`,
                }
            });
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