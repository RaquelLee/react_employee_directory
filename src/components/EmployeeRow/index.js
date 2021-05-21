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
                this.setState(
                    { employees: res.data.results }))
            .then(console.log(this.state.employees))
            .catch(err => console.log(err));
    };

    handleSearchInput = (e) => {
        this.setState({ search: e.target.value });
    };

    SearchEmployeeByName = (e) => {
        this.employees.filter((employee) => {
            return employee.name.first === this.search;
        });
    };

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.search !== prevProps.search) {
            this.SearchEmployeeByName()
        };
    };

    render() {
        const { employees, search } = this.state
        return (
            <main>
                <form>
                    <input type="text" placeholder="Name"
                        value={search}
                        onChange=
                        {this.handleSearchInput}
                        {...console.log(search)}>
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
