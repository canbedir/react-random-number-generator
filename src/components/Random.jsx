import React, { useState } from 'react'
import "./random.css"

const Random = () => {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10)
    const [randomNumber, setRandomNumber] = useState(0)

    const createRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random()*(max - min + 1) + min))
    }

  return (
    <div className='container'>
        <div className='container-random'>
            <div className="random-number">
                <span className='rn'>Random Number:</span> <span style={{color:"red"}}>{randomNumber}</span>
            </div>
            <div className="min-max">
                <div className="min">
                    <span>Min:</span>
                    <input onChange={(e) => setMin(parseInt(e.target.value))} value={min} className='input' type="number"/>
                </div>
                <div className="max">
                    <span>Max:</span>
                    <input onChange={(e) => setMax(parseInt(e.target.value))} value={max} className='input' type="number"/>
                </div>
            </div>
            <div className="btn">
                <button onClick={createRandomNumber}>Create Random Number</button>
            </div>
        </div>
    </div>
  )
}

export default Random