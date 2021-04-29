import React from "react";
import API from "../utils/API";
// api starts with .result, 
// render name search here

class EmployeeContainer extends Component {
    state = {
        result: {},
    };
    componentDidMount() {
        this.searchEmployees();
    }

    searchMovies = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <tr>
                <th scope="row">picture.thumbnail</th>
                <td>name.first name.last</td>
                <td>email</td>
            </tr>

        );
    }
}

export default EmployeeContainer;
