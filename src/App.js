import React from 'react'
import Homepage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'
import './App.css';

const HatsPage = props => {
  return <div>
    <h1>Hats Page</h1>
  </div>
}

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
