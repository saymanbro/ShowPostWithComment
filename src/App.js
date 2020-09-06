import  React  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Component/PostDetails/PostDetails';
import Home from './/Component//Home//Home';


function App() {
  return (
    <>
       <Router>
         <Switch>
           <Route exact path='/'>
           <Home></Home>
           </Route>
          <Route path='/postDetails/:postId'>
            <PostDetails></PostDetails>
            
          </Route>
          
         </Switch>
       </Router>
    </>
  );
}

export default App;
