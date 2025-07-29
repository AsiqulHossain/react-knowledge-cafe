import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';


const Blogs = ({handleAddBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () =>{
       fetch('blogs.json')
       .then(res => res.json ())
       .then(data => setBlogs(data))

    },[])

    return (
        <div className='md:w-2/3'> 
            <h1 className="text-4xl"> Blocks:{blogs.length} </h1>
            {
                blogs.map(blog => <Blog 
                    key= {blog.id} 
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
            }

        </div>
    );
};
Blog.propTypes = {
   
    handleAddBookmark: PropTypes.func ,
    handleMarkAsRead:PropTypes.func
}


export default Blogs; 