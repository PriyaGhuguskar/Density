import React from 'react'
import "./style.css";
import trade1 from "../../Assets/trade1.png"
import trade2 from "../../Assets/trade2.png"
import trade3 from "../../Assets/trade3.png"

const MidCompo2 = () => {
    return (
        <div className='main-div3 flex'>
            <div className='top'>
                <h1 style={{ fontSize: '4rem' }}>Trade More. <span className='yellow'>Pay Less.</span></h1>
                <p>Our low Fees Supercharge Your Profits</p>
            </div>
            <div className='bottom'>
                <div>
                    <img src={trade1} alt='trade1' />
                </div>
                <div>
                    <img className='image-2' src={trade2} alt='trade2' />
                </div>
                <div>
                    <img src={trade3} alt='trade3' />
                </div>
            </div>
        </div>
    )
}

export default MidCompo2