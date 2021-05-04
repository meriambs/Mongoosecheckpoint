import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            
        <nav className="navbar bg-dark">
        <h1>
          <Link to="/"><i class="fas fa-code"></i> DevConnector</Link>
        </h1>
        <ul>
          <li><Link to="/profile">Developers</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
       
        </div>
    )
}

export default Navigation
