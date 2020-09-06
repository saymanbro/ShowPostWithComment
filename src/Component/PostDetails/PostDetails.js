import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useEffect} from 'react';
import Comment from '../Comment/Comment';



const PostDetails = () => {
   const {postId} =useParams();
   const [post, setPost] = useState({});
   const [comment, setComment]= useState([])

   useEffect(() => {
       const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
       fetch(url)
       .then(res => res.json())
       .then(data => setComment(data))
   },[])

   useEffect(()=>{
      const url =`https://jsonplaceholder.typicode.com/posts/${postId}`
      fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
   },[])
    return (
        <div style={{width:'1150px',borderRadius:'15px', height:'1200px', backgroundColor:'#2a6a77',margin:'40px',padding:'20px',textAlign:'center', color:'white'}}>
          <h1> --- Post Details ---</h1>
   
    <h3>Post Title: {post.title}</h3>
    <p>  <strong>Post detail:</strong> {post.body}</p>
    <h1>---Comment Section---</h1>
     {
         comment.map(cmt => <Comment comment={cmt}></Comment>)
     }
        </div>
    );
};

export default PostDetails;