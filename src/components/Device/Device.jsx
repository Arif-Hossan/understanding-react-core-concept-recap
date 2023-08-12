import React from "react";

const Device = (props) => {
    const {name,price}=props;
  return (
    <div>
      <h3>I have a {name}</h3>
    </div>
  );
};

export default Device;
