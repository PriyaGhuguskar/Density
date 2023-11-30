import React from 'react'
import "./style.css";
import tradegraph from "../../Assets/tradegraph.png"

const MidCompo4 = () => {
    return (
        <div className='main-div5 flex'>
            <div className='top'>
                <h1><span className="yellow">Unlock </span>New Frontiers.</h1>
                <p>Are you a stock trader looking for new opportunities to make </p>

                <p> money? We got you covered!</p>
            </div>
            <div className='bottom'>
                <img src={tradegraph} alt='image' />
            </div>
        </div>
    )
}

export default MidCompo4