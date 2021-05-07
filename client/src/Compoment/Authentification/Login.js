import React , {useState}from 'react'
import Navigation from '../Navigation';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Login = () => {
  const [formData,setFormData]=useState(
    {
      email:"",
      
     
      password:"",
       
    }
  );
  const { email , password }=formData;
  const change=e=> setFormData({
    ...formData, [e.target.name]:e.target.value
  })

  const submit = async (e) => {
    const res = await axios.post('http://127.0.0.1:4150/Auth', e);
    await localStorage.setItem('token', res.data.token);
    console.log('u win');
    
  }
    return (
        <div>
        
        <section className="container">
        <div className="alert alert-danger">
          Invalid credentials
        </div>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" onSubmit={e=>submit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e=>change(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e=>change(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
      </div>
    )
}

export default Login
