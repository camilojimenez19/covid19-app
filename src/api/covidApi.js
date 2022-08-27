import axios from "axios";

const covidAPI = axios.create({
    baseURL: 'https://api.covid19api.com'
});

export default covidAPI;
