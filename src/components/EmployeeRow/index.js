import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import API from "../../utils/API";
// api starts with .result, 
// render name search here

class EmployeeContainer extends Component {
    state = {
        search: '',
        employees: [],
    };

    componentDidMount() {
        this.setAllEmployees();
    }

    setAllEmployees = () => {
        API.getEmployees()
            .then(res => 
                // console.log("API.getEmployees",
                // res.data.results))
                this.setState(
                {employees: [res.data.results]} 
                ))
                .then(console.log(this.state.employees))
            .catch(err => console.log(err));
    };
    
    handleSearchInput = (e) => {
        this.setState({ search: e.target.value })
    }
    searchEmployeeByName = () => {
        this.employees.filter((employee) => {
            return employee.name.first === this.search;
        })
    };

    sortEmployeeByName = () => {
    };

    render() {
        const { employees, search } = this.state
        return (
            <main>
                <form>
                    <input type="text" placeholder="Name"
                        value={search}
                        onChange={this.handleSearchInput}>
                    </input>
                </form>
                <EmployeeTable
                    {...employees.map((employee) => {
                        return (
                            <tr>
                                <td>{employee.picture.thumbnail}</td>
                                <td>{employee.name.first}
                                    {employee.name.last}</td>
                                <td>{employee.email}</td>
                            </tr>)
                    })}
                />
            </main>
        );
    }
}

export default EmployeeContainer;
