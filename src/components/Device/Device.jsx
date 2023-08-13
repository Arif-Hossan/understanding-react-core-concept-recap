import React from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

const Device = (props) => {
  const { name, price } = props;
  return (
    <div>
      <h3>I have a {name}</h3>
      <DeviceDetails price={price}></DeviceDetails>
    </div>
  );
};

export default Device;
