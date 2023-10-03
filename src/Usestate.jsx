import React,{useState} from 'react'

function usestate() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>useState</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default usestate