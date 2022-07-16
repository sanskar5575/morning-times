import { Container } from '@mui/material'
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsContent.css';

const NewsContent = ({newsArray,newsResults,loadMore,setLoadMore}) => {
  return  <Container maxWidth="md">
  
  <div className="content">
     <div className='downloadMessage'>
       <span className="downloadText">
            For best experience use app from
       </span>

       <img 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAUWeG5MJoPryHkswo0GbqpdIQ92WXIhPqXqb-k9V&s" 
       height="80%"
       alt="app-store" 
      />

       <img 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUz724rlinWjdkvLuAojmnhsd_7UxAwGunQ&usqp=CAU" 
       height="80%"
       alt="play store" 
       />

     </div>

     {
      newsArray?.map((newsItem) =>(

     <NewsCard newsItem={newsItem} key={newsItem.title}/>
      ))
     }

    {
      loadMore <= newsResults && (
        <>
          <hr />
          <button className="loadMore" 
                 onClick={()=> setLoadMore(loadMore+15)}
          
          > Load More</button>
        </>
      )
 
    }

  </div>
  
  
   </Container>
  
}

export default NewsContent