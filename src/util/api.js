import axios from "axios";

//api call to generater random users to populate list Add search and filters to this
export default {
    getRandomUsers: function () {
        return axios.get("https://randomuser.me/api/?=result=50?inc=name,location,phone,id,picture");
    }

};