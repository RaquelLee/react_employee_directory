import React from "react";
import EmployeeRow from "../EmployeeRow";

function EmployeeTable() {
    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>

            </thead>
            <tbody>
                {/* render employees */}
                {props.results.map(result => (
                    <EmployeeRow></EmployeeRow>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeeTable;