import React, { useEffect, useRef, useState } from 'react'


const AppEffect = () => {

    // const [ textState, setTextState ] = useState("");

    const textRef = useRef();

    const [ flag, setFlag] = useState(false);

    // useEffectの中身はレンダリングの後に実行される
    useEffect(() => {
        console.log("side effect")
        // 第二引数で中身を実行するタイミングを指定できる
    },[flag]);
    // console.log("rendering")

  return (
    <div>
        <input 
            type="text" 
            // value={textState}
            // onChange={(e)=> setTextState(e.target.value)}
            ref={textRef}
            />
        <button onClick={()=> setFlag((prev) => !prev)}>送信</button>
        
    </div>
  )
}

export default AppEffect