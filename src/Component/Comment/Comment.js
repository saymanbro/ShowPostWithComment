import React from 'react';

const Comment = (props) => {
   
   const {name , body ,email} =props.comment;
         
    return (
        <div style={{color:'white', backgroundColor:'black', borderRadius:'14px'}}>
            
                <h3>Name : {name}</h3>
                <h5>Email : {email}</h5>
                <p>Comment body : {body}</p>



        </div>
    );
};

export default Comment;