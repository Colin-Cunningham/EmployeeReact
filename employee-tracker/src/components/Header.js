import React from "react";

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
  
function Header(props) {
  return (
    <div>
      <h1 style={styles.Header} className="jumbotron">Employees</h1>
    </div>
  );
}

export default Header;