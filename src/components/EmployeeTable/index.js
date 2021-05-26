import React from "react";

function EmployeeTable(props) {
    return (
        <table class="table table-hover">

            {props.children}

        </table>
    );
}

export default EmployeeTable;