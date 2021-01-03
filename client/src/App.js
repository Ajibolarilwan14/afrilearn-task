import React from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Home from './Components/Home/Homepage';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';



const Routing = () => {
  return(
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
