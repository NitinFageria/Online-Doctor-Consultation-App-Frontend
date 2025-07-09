// Import Axios library

import axios from "axios";

// Function to make GET request
// async function getRequest(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

const getRequest = async ({url}) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}
// Function to make POST request
async function postRequest({ url = "", data = {} }) {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to make PUT request
async function putRequest(url, resourceId, data) {
    try {
        const response = await axios.put(`${url}/${resourceId}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Exporting functions
export {
    getRequest,
    postRequest,
    putRequest
};
