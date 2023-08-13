import React from 'react';

const DeviceDetails = (props) => {
    const {price} =props;
    return (
        <div>
            <p>Price of this product : {price} Bdt</p>
        </div>
    );
};

export default DeviceDetails;