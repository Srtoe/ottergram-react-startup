import React from 'react';

function EmployeeList(props) {
  return (
    <div className="employee-data">
      <h3>Employee List</h3>

      {props.employees.length === 0 ? (
        <p>No employees have been added yet.</p>
      ) : (
        <ul>
          {props.employees.map((employee, index) => (
            <li key={index}>
              <strong>{employee.name}</strong>
              <br />
              Job Title: {employee.title}
              <br />
              Department: {employee.department}
              <br />
              Email: {employee.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;