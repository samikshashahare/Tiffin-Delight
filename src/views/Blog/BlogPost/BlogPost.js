import React from 'react'
import './BlogPost.css';
import BlogData from './../Config/blogData.json';
import BlogPreviewpostcard from './../Previewpostcard/Previewpostcard'
function BlogPost() {
  return (
   <>
   <div className='Blogpostcard'>
    {
      BlogData.map((post, index) => {
            return <BlogPreviewpostcard key={index} 
                id={post.id}
                Title={post.Title}
                Description={post.Description} 
                Image={post.ImageUrl}
                Date={post.Date}
            />
          })

    }

   </div>
   
   </>
  )
}

export default BlogPost