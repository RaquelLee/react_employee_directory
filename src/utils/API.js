import axios from "axios";

const exportDefault = {
    getEmployees: function () {
        return axios.get("https://randomuser.me/api/?format=pretty&results=10&nat=us&inc=name,email,picture");
    }
};

export default exportDefault;
