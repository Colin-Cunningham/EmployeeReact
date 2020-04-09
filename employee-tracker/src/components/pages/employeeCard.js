import React from "react";


function employeecard(props) {
  return (
    <>
      <thead className="table">
        <tr>
          <th>
            <img alt="" src={props.image} />
          </th>
          <th scope="col">{props.name}</th>
          <th scope="col">{props.title}</th>
          <th scope="col">{props.number}</th>
          <th scope="col">{props.salary}</th>
        </tr>
      </thead>
    </>
  );
}

export default employeecard;
