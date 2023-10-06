import React, { useState, useEffect } from 'react'
import './BlogReadPost.css'
import { useParams } from 'react-router-dom'
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import BlogData from './../Config/blogData.json';

function BlogReadPost() {

    const { id } = useParams()

    const [blogpost, setBlogPost] = useState({})

    useEffect(() => {
        BlogData.forEach((blogpostObj) => {
            if (blogpostObj.id == id) {
                setBlogPost(blogpostObj)
            }
        })
    }, [id])



    return (
        <>

            <Navbar />
            <div className="Blogreadpost-container">
                <p className='blogreadpost-title'>{blogpost.Title}</p>
                <p className='blogreadpost-date'>{blogpost.Date}</p>
                <img src={blogpost.ImageUrl} className='blogreadpost-img' />
                <p className='blogreadpost-description'>{blogpost.Description}</p>





                <Footer />
            </div>

        </>
    )
}

export default BlogReadPost