import React, { Component } from "react";
import API from "../../utils/API";
// api starts with .result, 
// render name search here

class EmployeeContainer extends Component {
    state = {
        employees: [],
    };

    componentDidMount() {
        this.setAllEmployees();
    }

    setAllEmployees = () => {
        API.getEmployees()
            .then(res => this.setState(
                { employees: res.data.results }))
            .then(console.log(this.state.employees))
            .catch(err => console.log(err));
    };

    SearchEmployeeByName = (e) => {
        const search = e.target.value;
        console.log(search)
        const searchedEmployee = this.state.employees.filter((employee) => {
            if (employee.name.first.toLowerCase()
            .includes(search.toLowerCase() ||
            employee.name.last.toLowerCase()
            .includes(search.toLowerCase()))) {
                console.log(employee)
                this.setState({ employees: employee})
            }
            return employee;
        });
        this.setState({ employees: searchedEmployee })
    };

    SortEmployeeAsc = () => {
        const sortedEmployeesAsc = this.state.employees.sort(function (a, b) {
            var nameA = a.name.first.toLowerCase();
            var nameB = b.name.first.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });   
        this.setState({ employees: sortedEmployeesAsc })
        };

    SortEmployeeDesc = () => {
        const sortedEmployeesDesc = this.state.employees.sort(function (a, b) {
            var nameA = a.name.first.toLowerCase();
            var nameB = b.name.first.toLowerCase();
            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
            return 0;
        });   
        this.setState({employees: sortedEmployeesDesc})
    };

    render() {
        const { employees } = this.state
        return (
            <main>
                <form>
                    <input type="text" placeholder="Name"
                        onChange=
                        {this.SearchEmployeeByName}>
                    </input>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col"><span>Name </span>
                                <button onClick=
                                    {this.SortEmployeeAsc}>&#9650;
                        </button>
                                <button onClick=
                                    {this.SortEmployeeDesc}>&#9660;
                        </button>
                            </th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            return (
                                <tr key={employee.email}>
                                    <td>
                                        <img src=
                                            {employee.picture.medium} alt="employee">
                                        </img>
                                    </td>
                                    <td>
                                        {employee.name.last} ,
                                    {employee.name.first}
                                    </td>
                                    <td>
                                        {employee.email}
                                    </td>
                                </tr>
                            )
                        })};
                    </tbody>
                </table>
            </main>
        );
    }
}

export default EmployeeContainer;
// logged in function to pass to login component, using login function from app.js, main reason so login func is 
//access to props.login