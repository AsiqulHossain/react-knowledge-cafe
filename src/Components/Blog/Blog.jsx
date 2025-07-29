import PropTypes from 'prop-types';
import { IoBookmark } from "react-icons/io5";


const Blog = ({ blog, handleAddBookmark,handleMarkAsRead }) => {
    const { author, reading_time , cover ,title ,posted_date ,hashtags,read_time} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img  src={cover}></img>
            <div className= 'flex justify-between mb-5 '>
                <div className='ml-6 mb-4'> 
                   <h3 className="text-2xl">{author}</h3>
                   <p>{posted_date}</p>
                </div>
                <div>
                  <span>{reading_time} </span>
                  <button 
                  onClick={ ()=> handleAddBookmark (blog)}
                  className='ml-2 text-2xl'><IoBookmark></IoBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                { hashtags.map(hash=>( <span>
                    <a href=""> #{hash}</a>
                </span>))
                }
            </p>
            
            <button className='text-green-600 font-bold underline'
            onClick={()=> handleMarkAsRead (read_time)}>marks as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blog;
