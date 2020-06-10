import React from 'react'

function Mediacard(props) {

    return (
        <>
            <div>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
                <img src={props.image} alt={props.alt} />
            </div>
        </>
    )
}

export default Mediacard;