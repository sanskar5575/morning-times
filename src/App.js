import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Navbarnews from './components/Navbarnews';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';
import Scrollbutton from './components/scrollbutton/Scrollbutton';
import apikey from './data/config';

function App() {
    const [category,setCategory] = useState("general");
    const [newsArray,setNewsArray] = useState([]);
    const [newsResults,setNewsResults] = useState();
    const [loadMore,setLoadMore] = useState(15);
 

    const newsApi = async () =>{

      try {
  
        const news = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apikey=${apikey}&category=${category}&pageSize=${loadMore}`,
   
          );
           
          
          setNewsArray(news.data.articles)
          setNewsResults(news.data.totalResults)
          // console.log(news.data.articles)
        
      } catch (error) {
        console.log(error);
      }
    }

    // console.log(newsArray);

  useEffect(() => {
   newsApi();
   // eslint-disable-next-line  
  }, [newsResults,category,loadMore]) 
  
  


  return (
    <div className="App">

      <Navbarnews setCategory={setCategory}/>

      <div className="mycontent">

      <NewsContent loadMore ={loadMore} setLoadMore={setLoadMore} newsArray={newsArray} newsResults={newsResults} />
      </div>
         
         <Scrollbutton />

      <Footer />
    </div>
  );
}

export default App;
