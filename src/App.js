import LandingPage from './components/LandingPage'
import EXCOriginals from './components/EXCOriginals'
import EdiXualCreations from './components/EdiXualCreations'
import EXCOriginalsPhotoAlbum from './components/EXCOriginalsPhotoAlbum'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/EdiXualCreations' component={ EdiXualCreations } />
        <Route exact path='/EXCOriginals' component={ EXCOriginals } />
        <Route exact path='/EXCOriginals/WhoAreWe' component={ EXCOriginals } />
        <Route exact path='/EXCOriginals/WhatHaveWeDone' component={ EXCOriginals } />
        <Route exact path='/EXCOriginals/WhatHaveWeDone/Photos/:albumLink' component={ EXCOriginalsPhotoAlbum } />
        <Route exact path='/EXCOriginals/HowToReachUs' component={ EXCOriginals } />
        <Route exact path='/EXCOriginals/ComingUpNext' component={ EXCOriginals } />
      </Switch>
    </Router>
  );
}

export default App;
