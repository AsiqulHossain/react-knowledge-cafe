import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/2 bg-gray-300 ml-4 '>
           <div>
            <h3 className='text-2xl ml-40'>Reading Time:{readingTime}</h3>
           </div>
            <h2 className='ml-50'>Bookmarks:{bookmarks.length}</h2> 
            {
              
               bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)

            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.time
}
export default Bookmarks;