import React, { Component } from 'react';
<<<<<<< Updated upstream
import { BrowserRouter } from "react-router-dom";
import PitchLayout from './Containers/Layout/pitch-Layout';
import Routes from '../src/Routes/routes';
=======
import Login from './Containers/Login/login';
import Comment from './Containers/comment/comment';
import CommentList from './Containers/Comment-List/comment-list';

// import Register from './Containers/Register/register';
>>>>>>> Stashed changes

class App extends Component {
  render() {
    return (
      <>
<<<<<<< Updated upstream
        <BrowserRouter>
          {Routes}
        </BrowserRouter>
=======
        <Login />
        <CommentList/>
>>>>>>> Stashed changes
      </>
    );
  };
};

export default App;
