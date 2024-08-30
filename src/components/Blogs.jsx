import React, { useContext } from 'react'
import Spinnner from './Spinner';
import {AppContext} from '../context/AppContext'
// import './Blogs.css'

const Blogs = () => {

  // consume
  const {loading , posts} = useContext(AppContext);  
  console.log("Printing inside blogs component");
  console.log(posts);
  

  return (
    <div className='mt-20 w-11/12 max-w-[39%] font-medium m-auto mb-20 flex flex-col justify-center items-center'>
      {
          loading ?             
          (<Spinnner/>) : 

          (
            posts.length === 0 ? 
            (
              <div>
                <p>No Post Found</p>
              </div>
            ) : 
            (posts.map( (post) => (
              <div key={post.id} 
                className='mb-8'>

                  <p className='font-extrabold text-lg' >
                    {post.title}
                  </p>
                  <p className='text-xs italic mt-1'> 
                    By <span>{post.author}</span> on <span className='font-bold underline decoration-dashed underline-offset-2'>{post.category}</span> 
                  </p>
                  <p className='text-xs mt-1'>
                    Posted on {post.date}
                  </p>
                  <p className='mt-3 text-sm'>
                    {post.content}
                  </p>
                  <div className='flex gap-x-3'>
                    {post.tags.map( (tag , index) => {
                      return (
                        <span className='text-blue-700 mt-2 text-xs underline underline-offset-1 cursor-pointer' key={index}>
                          {` #${tag}` }
                        </span>
                      );
                    })}
                  </div>
              </div>
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs