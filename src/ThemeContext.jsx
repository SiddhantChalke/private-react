import React,{useState} from 'react'

export const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext()

function ThemeProvider({children}){
    const [dark, setDark] = useState(true)
    function toggle(){
        setDark(prevDark=>!prevDark)
    }
    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdateContext.Provider value={toggle}>
            {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider