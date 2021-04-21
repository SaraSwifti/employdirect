import axios from "axios";
 const URL = "https://randomuser.me/api/?results=100&nat=us"
//api call to generater random users to populate list Add search and filters to this
export default {
    search: function () {
        return axios.get(URL);
    },
};