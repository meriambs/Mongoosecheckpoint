import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
 
} from "react-router-dom";

 import Navigation from './Compoment/Navigation';
 import Landing from './Landing';
 import Register from "./Compoment/Authentification/Register";
 import Login from './Compoment/Authentification/Login';

function App() {
 
  return (
     <Router>
     <div className="App">
      <Navigation/>
      <Route exact path="/" component={Landing}/>
    <section className="container">
    <Switch>
    <Route exact path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    </Switch>
    </section>
  
     </div>
   </Router>

  );
}

export default App;
