import React from 'react';
import Home from "./components/Page/Home/Home"
import Contact from "./components/Page/Contact/Contact"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  return (
    <Router>
    <Route>
     <Switch>
       <Route exact path="/" render={() => <Home/>}/>
       <Route exact path="/contacts" render={() => <Contact/>}/>
     </Switch>
     </Route>
     </Router>
  );
}

export default App;
