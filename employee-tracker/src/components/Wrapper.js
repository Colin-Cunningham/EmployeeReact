import React from "react";
 
const styles ={
wrapper: {
   paddingLeft: "20%",
   paddingRight: "24%"
} 
    
}



function changeIcon(){
   
}


function Wrapper(props) {
  return <div style={styles.wrapper} className="wrapper">{props.children}
   <thead className="thead-dark">
        <tr>
        <th scope="col">Image</th>
        <th scope="col">Name <i onClick= {changeIcon()} className="fas fa-sort-up"></i></th>
        <th scope="col">Title <i className="fas fa-sort-down"></i></th>
        <th scope="col">Phone Number </th>
        <th scope="col">Salary </th>
        </tr>  
  </thead>
  </div>
}

export default Wrapper;
