import React from "react";
import Header from "./components/Header";
import employees from "./employees.json";
import Employeecard from "./components/pages/employeeCard"

const styles = {
  Header: {
    textAlign: "center",
    background: "#e8eaf6"
  },
    button: {
      textAlign: "center",
    },
    input: {
      width: "33%",
      background: "#e8eaf6",
      margin: "0 auto",
    }
};

class Employees extends React.Component{
  
  state = {
    employees: employees,
    name: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name
    const updatedemployees = this.state.employees.filter(employee => employee.name === name)
    this.setState({ employees: updatedemployees});
  };


  removeFriend = title => {
    const updatedemployees = this.state.employees.filter(employee => employee.title !== title)
    this.setState({ employees: updatedemployees});
  };

  render(){return (
    <>
    <Header/>
    <form className="md-form ">
        <input
        style={styles.input}
        className="form-control"
        value={this.state.name}
        name="name"
        onChange={this.handleInputChange}
        type="text"
        placeholder="Search Employee By Name"
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
        <button style={styles.button}>Filter out Managers</button>
       
      </form>
      {this.state.employees.map(employee => (
            <Employeecard
            sortemployee={this.removeEmployee}
            id={employee.id}
            name={employee.name}
            image={employee.image}
            title={employee.title}
            number={employee.phoneNumber}
          />
          ))}
  </>
  )}}

export default Employees;
