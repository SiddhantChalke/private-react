import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SinglePost = () => {
    const {postId} = useParams();
  return (
    <div>
        <h2>useParams</h2>
        <h4>Post : {postId}</h4>
        <p>Change the post ID in URL to change the post number.</p>
    </div>
  )
}

export default SinglePost