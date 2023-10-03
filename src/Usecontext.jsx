import React from 'react'
import { useContext } from 'react'
import  {ThemeContext,ThemeUpdateContext}  from './ThemeContext'

function Usecontext() {
    const dark = useContext(ThemeContext)
    const toggle = useContext(ThemeUpdateContext)
    const themeStyle={
        backgroundColor:dark?'#333':'#ccc',
        color:dark?'#ccc':'#333',
        padding:'2rem',
        margin:'2rem'
    }
    return (
        <>
        <div style={themeStyle}>
            <h3>Usecontext</h3>
            <p>State should be held by the highest parent component in the stack that requires access to the state.Even though components 2-4 did not need the state, they have to pass it along to reach further nested components.</p>
        </div>
        <button onClick={toggle}>
            Toggle theme
        </button>
        </>
  )
}

export default Usecontext