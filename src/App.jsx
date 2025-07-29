
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [readingTime,setReadingTime]=useState(0);
  const handleMarkAsRead=time=>{
    const newReadingTime= readingTime + time;
    setReadingTime(newReadingTime);
  }

  const [bookmarks,setBookmarks]= useState([]);
   const handleAddBookmark= blog=>{
    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);
   
   }

  return (
    <>
        
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
       <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
       <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
   
      
    </>
  )
}

export default App
