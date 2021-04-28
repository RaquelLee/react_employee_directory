import React from "react";

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
            </tbody>
        </table>
    );
}

export default EmployeeTable;