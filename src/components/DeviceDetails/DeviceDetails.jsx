import React from 'react';

const DeviceDetails = (props) => {
    const {price} =props;
    return (
        <div>
            <h2>New portion Price</h2>
            <p>Price of this product : {price} Bdt</p>
        </div>
    );
};

export default DeviceDetails;