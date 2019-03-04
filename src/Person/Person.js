import React from "react";

import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <p>
        My name is {props.name} and I am {props.age} years old.
      </p>
      <br />
      <input type="text" value={props.name} onChange={props.onChange} />
    </div>
  );
};

export default Person;
