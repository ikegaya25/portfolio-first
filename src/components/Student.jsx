import React from 'react'

function Student(name,age,gender){
    return (
     <>
       <div>
        <h3>{name}</h3>
        <p><span>{age}</span>さい</p>
        <p>{gender}</p>
       </div>
    </>
    )
}

export default Student