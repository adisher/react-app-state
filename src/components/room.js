import React, {useState} from 'react'

function Room() {
    const [isLit, setLit] = useState(true);
    const [isOn, setOn] = useState(true);
    let [temp, setTemp] = useState(22);
    const brightness = isLit? "lit" : "dark"
    return (
        <>
        <div className = {`room ${brightness}`}>The Room is {isLit? "lit" : "dark"}
            <br/>
            <button onClick={() => setLit(!isLit)}>{isLit? "Dark" : "Light"}</button>
            <br/><br/>
            <div> {isLit? `Current Temperature in Celsius: ${temp}` : null} 
            <br/>
                {isLit? <button onClick = {() => setTemp(++temp)}>+</button> : null}
                {isLit? <button onClick = {() => setTemp(--temp)}>-</button> : null}
            </div>
            <br/>
            <div>Switch is {isOn? "ON" : "OFF"}
            <br/>
                <button onClick={() => setOn(1)}>ON</button>
                <button onClick={() => setOn(0)}>OFF</button>
            </div>
        </div>
        </>
    )
}

export default Room;