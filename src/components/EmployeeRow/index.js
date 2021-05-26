import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeTable from '../EmployeeTable'
// api starts with .result, 
// render name search here

class EmployeeContainer extends Component {
    state = {
        employees: [],
        search: ''
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
// set search as state to dynamically update
    SearchEmployeeByName = (e) => {
        this.setState({search :e.target.value})
        // console.log(this.state.search)
        const searchedEmployee = this.state.employees.filter((employee) => {
            if (employee.name.first.toLowerCase()
            .includes(this.state.search.toLowerCase() ||
            employee.name.last.toLowerCase()
            .includes(this.state.search.toLowerCase()))) {
                console.log("31 if statement",employee)
                return employee;
            }
        });
        console.log("searched employee", searchedEmployee )
        this.setState({ employees: searchedEmployee })
        if (this.state.search === "") {
            this.setAllEmployees()
        }
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
                <EmployeeTable>
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
                    </EmployeeTable>
            </main>
        );
    }
}

export default EmployeeContainer;
// logged in function to pass to login component, using login function from app.js, main reason so login func is 
//access to props.login