import React from 'react';
{/* Stateless Component */}
const Knob = (props) => {
    return (
        <div style={{border : "2px solid orange" , margin:"5px"}}>
            <h6>This is Knob Component</h6>
            <p>Steps : {props.steps}</p>
        </div>
    );
};

export default Knob;