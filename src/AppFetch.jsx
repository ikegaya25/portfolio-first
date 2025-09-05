import React , {useEffect, useState} from 'react'

const AppFetch = () => {
    const [ data, setData ]= useState([]);
    
    useEffect(()=> {
        const fetchData = async() => {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok){
                    throw new Error("ネットワークエラー");
                }
                const json = await response.json();
                setData(json)
            }catch (error) {
                alert("エラーです: " + error.message);
            }
        };
        fetchData();
    },[]);
    console.log(data);
    return (
    <div>
        {(!data || data.length === 0) ? (
            <div>Loading</div>
        ) : (
            <div>{data[0].title}</div>
        )}

    </div>
  )
}

export default AppFetch