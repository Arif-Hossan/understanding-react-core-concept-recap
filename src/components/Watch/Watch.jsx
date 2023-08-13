import React, { useState } from 'react';
import Dial from '../Dial/Dial';
{/* State full Component */}
const Watch = () => {
    const [steps,setSteps]=useState(1);
    const increaseSteps = () => {
        setSteps(steps + 1);
    }
    return (
        <div style={{border : '2px solid red', margin: "5px"}}>
            <h4>This is my Smart Watch</h4>
            <p>Steps : {steps}</p>
            <button onClick={increaseSteps}>De Dour</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;