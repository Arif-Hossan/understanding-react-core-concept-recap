import React from 'react';
import Knob from '../Knob/Knob';
{/* Stateless Component */}
const Dial = (props) => {
    return (
        <div style={{border : "2px solid violet", margin:"5px"}}>
            <h4>This is Dial Component</h4>
            <p>Your steps count : {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;