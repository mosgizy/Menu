import React from 'react'

const Buttons = ({All,Breakfast,Launch,Shakes}) => {

    return (
        <div className='btn-wrapper'>
            <button className="btn" onClick={All}>all</button>
            <button className="btn" onClick={Breakfast}>breakfast</button>
            <button className="btn" onClick={Launch}>launch</button>
            <button className="btn" onClick={Shakes}>shakes</button>
        </div>
    )
}

export default Buttons
