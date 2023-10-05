import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'
import Navbar from "./../../components/Navbar/Navbar"
import BlogPost from './BlogPost/BlogPost'
import ImageA from './blog-img1.jpg'
function Blog() {
  return (
    <>
      <div className="blog-main-container">
        <Navbar />
        <div className="blog-cont1">
          <h3 className='blog-heading1'>Blog</h3>
          <Link to={'./../Home/Home.js'} className='blog-heading2'> Home/Blog </Link>

        </div>

        <BlogPost />

      </div>

    </>
  )
}

export default Blog