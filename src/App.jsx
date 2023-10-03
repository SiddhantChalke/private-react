import Usestate from './Usestate' 
import './App.css'
import usestate from './Usestate'
import Useeffect from './Useeffect'
import Useeffect2 from './Useeffect2'
import Usecontext from './Usecontext'
import ThemeProvider from './ThemeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'
import SinglePost from './Useparams'

function App() {
  
  return (
    <div className="App">
      {/* <div className="card"> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Usestate />}/>
            <Route path='/useeffect' element={<Useeffect />}/>
            <Route path='/:postId' element={<SinglePost />}/>
            <Route path='/useeffect2' element={<Useeffect2 />}/>
            <Route path='/usecontext' element={
              <ThemeProvider>
                <Usecontext />
              </ThemeProvider>
            }/>
          </Routes>
        </BrowserRouter>
        
      {/* </div> */}
    </div>
  )
}

export default App
