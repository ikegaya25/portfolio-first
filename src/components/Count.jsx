// import React { useState } from 'react'
import { useState } from 'react';
import

const Count = ({count,setCount}) => {
  return (
    <>
        <div>Count
        <button onClick={()=> setCount((num) => num +1)} > + </button>
        <span>{count}</span>
        <button onClick={()=> setCount((num) => num -1)} > - </button>

        </div>
    </>
  )
};

export default Count