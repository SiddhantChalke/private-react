import React,{useState,useEffect} from 'react'

function Useeffect2() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize=()=>{
        setWindowWidth(window.innerWidth)
        // handleResize will set windowWidth to current width
    }
    useEffect(() => {
      window.addEventListener('resize',handleResize)
    //   when window is resized, handleResize will be fired
    }, [])
    
    return (
    <div>
        <h2>width with useEffect</h2>
        {windowWidth} px
    </div>
  )
}

export default Useeffect2