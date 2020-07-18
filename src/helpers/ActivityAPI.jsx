import { BASE_URL } from "../config";
import axios from "axios";

export const getNumberOfPages = async (pageSize) => {
    try {
        const response = await axios.get(BASE_URL + 'activity/numberOfPages?pageSize='+pageSize);
        return response;
    } catch (error) {
        return 0;
    }

}

export const getPageActivities = async (pageNumber,pageSize) => {
    try {
        const response = await axios.get(BASE_URL+ 'activity/pages/'+pageNumber+'?numberOfActivities='+pageSize);
        return response;
    } catch (error) {
        return null;
    }
}

export const getActivityWithID = async (id) => {
    try {
        const response = await axios.get(BASE_URL+ 'activity/allActivities/'+id);
        return response;
    } catch (error) {
        return null;
    }
}
export const addActivity = async (activity) => {
    const formData={

    };
    formData.append(activity);
    try {
        const response = await axios.post(BASE_URL+ 'activity/update',formData);
        return response;
    } catch (error) {
        return null;
    }
}
export const updateActivity = async (activity) => {
    const formData={};
    formData.append(activity);
    try {
        const response = await axios.post(BASE_URL+ 'activity/update',formData);
        return response;
    } catch (error) {
        return null;
    }
}
export const deleteActivity = async (activity) => {
    const formData={};
    formData.append(activity);
    try {
        const response = await axios.post(BASE_URL+ 'activity/delete',formData);
        return response;
    } catch (error) {
        return null;
    }
}