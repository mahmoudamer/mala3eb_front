import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import PitchLayout from './Containers/Layout/pitch-Layout';
import Routes from '../src/Routes/routes';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          {/* {Routes} */}
        </BrowserRouter>
          <PitchLayout></PitchLayout>
      </>
    );
  };
};

export default App;
