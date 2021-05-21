import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
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
            .then(res =>
                this.setState(
                    { employees: res.data.results }))
            .then(console.log(this.state.employees))
            .catch(err => console.log(err));
    };

    SearchEmployeeByName = (e) => {
        const search = e.target.value;
        console.log(search)
        this.state.employees.filter((employee) => {
            if (employee.name.first.toLowerCase().includes(search.toLowerCase())) {
                console.log(employee.name.first)
            } 
            return employee
        }); ;
    };

    render() {
        const { employees} = this.state
        return (
            <main>
                <form>
                    <input type="text" placeholder="Name"
                        onChange=
                        {this.SearchEmployeeByName}>
                    </input>
                </form>
                <EmployeeTable>
                    {employees.map((employee) => {
                        return (
                            <tr>
                                <td>
                                    <img src=
                                        {employee.picture.medium} alt={employee.name.first}>
                                    </img>
                                </td>
                                <td>
                                    {employee.name.last} ,
                                    {employee.name.first}
                                </td>
                                <td>
                                    {employee.email}
                                </td>
                            </tr>)
                    })}
                </EmployeeTable>
            </main>
        );
    }
}

export default EmployeeContainer;
