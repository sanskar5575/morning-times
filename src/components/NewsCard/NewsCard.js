import React from 'react';
import './NewsCard.css'

const NewsCard = ({newsItem}) => {

    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0,2));
    const time = hour>12 ? true : false;
 
    // console.log(newsItem);
  return (

    <div className='newsCard'>
    <img className='newsImage'
     src= {newsItem.urlToImage
     ? newsItem.urlToImage
     : "https://us.123rf.com/450wm/koblizeek/koblizeek1902/koblizeek190200055/125337077-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6"
     }
     alt={newsItem.title} />

     <div className="newsText">
        <div>
            <span className='title'>{newsItem.title}</span>
            <br /> {" "}
            <br />
    <span className='author'>
              <a href={newsItem.url} target='_blank' rel='noreferrer '>
                <b>Go to Page</b>
              </a> 
              {" "}
            <span className='muted'>
            by {newsItem.author?newsItem.author:"author"} 
            <br />
            {" "} {" "}
            {
                time?`${hour-12}:${date[4].substring(3,5)} pm `
                :`${hour}:${date[4].substring(3,5)} am ` 
            }
            on {date[0]} {date[2]} {date[1]} {date[3]} 

            </span>  
           
    </span>
        </div>
          <div className="lowerNewsText">
            <div className="description">
                {newsItem.description}
            </div>
            <span className='readMore'>
                read more at {" "}
                <a href={newsItem.url} target='_blank' rel='noreferrer '>
                <b>{newsItem.source.name}</b>
              </a>
            </span>
          </div>
     </div>
    
    </div>
  )
}

export default NewsCard