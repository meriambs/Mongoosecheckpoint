import React ,{useState} from 'react'
import Navigation from '../Navigation';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Register = () => {
  const [formData,setFormData]=useState(
    {
      name:"",
      lastName:"",
      email:"",
      password:"",
       password2:""
    }
  );
  const {name , lastName,email , password , password2}=formData;
  const change=e=> setFormData({
    ...formData, [e.target.name]:e.target.value
  })

  const submit = async e=>{
    e.preventDefault();
    if(password !== password2){
console.log('they dont matcsh')
    }else 
    {
      const newUser={
        name,
        lastName,
        email,
        password,
       
      }
      try{
 const config={
   headers:{
     'Content-Type':'Application/json',
    
   }
 }
 const body=JSON.stringify(newUser);
 const res = await axios.post('/users',body,config);
 console.log(res.data)
      }catch(error){
        console.error(error.response.data)
      }
    }
  }
    return (
        <div>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e=>submit(e)}>
          <div className="form-group">
            <input type="text"
             placeholder="Name" 
             name="name" 
             value={name}
             onChange={e=>change(e)}
             required />
          </div>
          <div className="form-group">
          <input type="lastName"
           placeholder="lastName" 
           name="lastName" 
           value={lastName}
           onChange={e=>change(e)}
           required />
        </div>
          <div className="form-group">
            <input type="email" 
            placeholder="Email Address"
             name="email" 
             value={email}
             onChange={e=>change(e)}
             />
            <small claclassNamess="form-text"
              >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small
            >
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={e=>change(e)}
            /> 
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={e=>change(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
        </div>
    )
}

export default Register
