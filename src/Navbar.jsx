import React from 'react'
import { Link } from 'react-router-dom'
import SinglePost from './Useparams'

export const Navbar = () => {
  return (
    <div style={{position:'relative',gap:'10px',display:'flex',fontSize:'20px', marginBottom:'30px'}}>
        <Link to='/'>useState</Link>
        <Link to='/useEffect'>useEffect</Link>
        <Link to='/:postId'>useParams</Link>
        <Link to='/useEffect2'>useEffect2</Link>
        <Link to='/useContext'>useContext</Link>
    </div>
  )
}
