import React, { useState, useEffect } from 'react';
import AllPost from '..//..//Component/AllPost/AllPost';

const Home = () => {
 const [post, setPost] =useState([])
 useEffect(() => {
   const url =('https://jsonplaceholder.typicode.com/posts')
   fetch(url)
   .then(res => res.json())
   .then(data => setPost(data))
 },[]);


    return (
      <>
     
      {
        post.map( post => <AllPost 
          allPost={post}>

        </AllPost>
        )
      }

   
</>



           );
};

export default Home; 