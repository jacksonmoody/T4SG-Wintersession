import React from 'react'
import "../styling/Profile.css"

function Attribute(props) {
    return (
        <div className="attribute">
            <h2>{ props.name }</h2>
            <p>{ props.value }</p>
        </div>
    )
}

export default Attribute