import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    this.state = {
      name: '',
      email: '',
      title: '',
      department: '',
      employees: savedEmployees
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newEmployee = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      department: this.state.department
    };

    const updatedEmployees = [...this.state.employees, newEmployee];

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    console.log('Employee Added:', newEmployee);
    console.log('Saved Employees:', updatedEmployees);

    this.setState({
      name: '',
      email: '',
      title: '',
      department: '',
      employees: updatedEmployees
    });
  }

  render() {
    return (
      <div className="employee-form-container">
        <h2>New Employee Form</h2>

        <form className="employee-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Job Title:</label>
            <input
              id="title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              id="department"
              type="text"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit">Add Employee</button>
        </form>

        <div className="employee-data">
          <h3>Employee Data</h3>

          {this.state.employees.length === 0 ? (
            <p>No employees have been added yet.</p>
          ) : (
            <ul>
              {this.state.employees.map((employee, index) => (
                <li key={index}>
                  <strong>{employee.name}</strong> - {employee.title}, {employee.department} ({employee.email})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default EmployeeForm;