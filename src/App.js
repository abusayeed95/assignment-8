import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './NotFound/NotFound';
import PostDetails from './Components/PostDetails/PostDetails';
import Navigation from './Components/Navigation/Navigation';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/post/:postId">
          <PostDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
