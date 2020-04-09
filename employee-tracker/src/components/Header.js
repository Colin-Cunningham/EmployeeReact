import React from "react";

const styles = {
    Header: {
      textAlign: "center",
      background: "#e8eaf6"
    },
      button: {
        textAlign: "center",
      },
  };
  
function Header(props) {
  return (
    <div>
      <h1 style={styles.Header} className="jumbotron">Employees</h1>
      <div style={styles.button}>
        <button className="btn" onClick={props.sortemployee}>Sort by name</button>
        <button className="btn" onClick={props.sortsalary} >Sort by Salary</button>
        </div>
    </div>
  );
}

export default Header;