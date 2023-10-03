import React,{useEffect,useState} from 'react'

function Useeffect() {
    const [resourceType, setResourceType] = useState(['posts'])
    const [items, setItems] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    },[resourceType])
    // 2nd arg is sideeffect

    return (
        <>
        <div className="">
            <button onClick={()=>setResourceType('posts')}>Posts</button>
            <button onClick={()=>setResourceType('users')}>Users</button>
            <button onClick={()=>setResourceType('comments')}>Comments</button>
        </div>
        <h2>{resourceType}</h2>
        {items.map(item =>{
           return <pre>{JSON.stringify(item)}</pre>
        })
        }
        </>
        
    )
}

export default Useeffect