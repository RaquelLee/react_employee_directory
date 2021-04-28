import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
//https://randomuser.me/documentation
// save load time by including fields
// https://randomuser.me/api/?format=pretty&results=10&nat=us&inc=name,email,picture
// results, then iterate through

export default {
    getEmployees: function () {
        return axios.get("https://randomuser.me/api/?format=pretty&results=10&nat=us&inc=name,email,picture");
    }
};
