import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    jobTitle: '',
    department: ''
  });

  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      employee.name === '' ||
      employee.email === '' ||
      employee.jobTitle === '' ||
      employee.department === ''
    ) {
      alert('Please fill out all fields before adding an employee.');
      return;
    }

    const newEmployee = {
      id: Date.now(),
      ...employee
    };

    const updatedEmployees = [...employees, newEmployee];

    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    setEmployee({
      name: '',
      email: '',
      jobTitle: '',
      department: ''
    });
  }

  function handleDelete(id) {
    const updatedEmployees = employees.filter((person) => person.id !== id);

    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  }

  const filteredEmployees = employees.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section className="employee-section">
      <div className="employee-intro">
        <p className="section-label">INT304 Final Project</p>
        <h1>Employee Directory</h1>
        <p>
          This final version improves my previous React project by using hooks,
          controlled form inputs, local storage, search filtering, and advanced CSS
          styling to create a more useful employee directory.
        </p>
      </div>

      <div className="employee-layout">
        <div className="employee-form-card">
          <h2>Add Employee</h2>
          <p>
            Enter employee information below. This form avoids collecting sensitive
            information and only stores basic directory details in the browser.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Employee Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={employee.name}
              onChange={handleChange}
              placeholder="Example: Rommel Torres"
            />

            <label htmlFor="email">Employee Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={employee.email}
              onChange={handleChange}
              placeholder="Example: employee@email.com"
            />

            <label htmlFor="jobTitle">Job Title</label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              value={employee.jobTitle}
              onChange={handleChange}
              placeholder="Example: Maintenance Planner"
            />

            <label htmlFor="department">Department</label>
            <input
              id="department"
              name="department"
              type="text"
              value={employee.department}
              onChange={handleChange}
              placeholder="Example: Facilities"
            />

            <button type="submit">Add Employee</button>
          </form>
        </div>

        <div className="employee-data">
          <div className="employee-data-header">
            <div>
              <h2>Current Employees</h2>
              <p>Total Employees: {employees.length}</p>
            </div>
          </div>

          <label htmlFor="search">Search Employees</label>
          <input
            id="search"
            type="text"
            className="search-box"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by name, email, title, or department"
          />

          {filteredEmployees.length === 0 ? (
            <p className="empty-message">No employees found.</p>
          ) : (
            <div className="employee-card-grid">
              {filteredEmployees.map((person) => (
                <div className="employee-card" key={person.id}>
                  <h3>{person.name}</h3>
                  <p><strong>Email:</strong> {person.email}</p>
                  <p><strong>Title:</strong> {person.jobTitle}</p>
                  <p><strong>Department:</strong> {person.department}</p>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => handleDelete(person.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="future-plan">
        <h2>Future Improvement Plan</h2>
        <p>
          A future improvement would be connecting this React employee directory
          to a Python back-end project. React would handle the user interface,
          while Python could manage employee records through a database instead
          of only saving the data in local storage.
        </p>
      </div>
    </section>
  );
}

export default EmployeeForm;