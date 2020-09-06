import React from 'react';
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Post = (props) => {
    const {title, body,id} =props.allPost;
    return (
        <div>
              <div style={{backgroundColor:'#2a6a77',color:'white',borderRadius:'15px', margin:'30px 100px 5px 20px', padding:'10px', display:'inline-flex'}}>
             <Box component="div" whiteSpace="nowrap">
                <h1>Post Id: {id}</h1>
                <h2>Post Title: {title}</h2>
                <p><strong> Post details: {body}</strong> </p>
               <Link to={`/postDetails/${id}`}> <Button variant='outlined' color='secondary'>Read More</Button></Link>
            </Box>


        </div>
        </div>
    );
};

export default Post;