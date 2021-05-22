import axios from "axios";

const exportDefault = {
    getEmployees: function () {
        return axios.get("https://randomuser.me/api/?format=pretty&results=10&inc=name,email,picture,id");
    }
};

export default exportDefault;
