import React, {useState} from 'react'

function Gate() {
    const [isOpen, setOpen] = useState(true);
    return (
        <>
            <div>{isOpen? "open" : "closed"}
                <button onClick = {() => setOpen(!isOpen)}>Push</button>
            </div>
        </>
    )
}

export default Gate;