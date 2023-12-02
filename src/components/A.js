import React from 'react'

const A = ({ message, posts}) => {
  return (
    <div>
      <h1>A component</h1>
      <p style={ { height: '50px', border:'1px solid #ddd' } }>{message}</p>
      <ul>
        {posts.map(post=>{
          return(
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default A