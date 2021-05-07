// import React ,{useState} from 'react'
// import Navigation from '../Navigation';
// import axios from 'axios';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// const Register = () => {
//   const [formData,setFormData]=useState(
//     {
//       name:"",
//       lastName:"",
//       email:"",
//       password:"",
//        password2:""
//     }
//   );
//   const {name , lastName,email , password , password2}=formData;
//   const change=e=> setFormData({
//     ...formData, [e.target.name]:e.target.value
//   })

//   const submit = async e=>{
//     e.preventDefault();
//     if(password !== password2){
// console.log('they dont matcsh')
//     }else 
//     {
//       const newUser={
//         name,
//         lastName,
//         email,
//         password,
       
//       }
//       try{
//  const config={
//    headers:{
//      'Content-Type':'Application/json',
    
//    }
//  }
//  const body=JSON.stringify(newUser);
//  const res = await axios.post('/users',body,config);
//  console.log(res.data)
//       }catch(error){
//         console.error(error.response.data)
//       }
//     }
//   }
//     return (
//         <div>
//       <section className="container">
//         <h1 className="large text-primary">Sign Up</h1>
//         <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
//         <form className="form" onSubmit={e=>submit(e)}>
//           <div className="form-group">
//             <input type="text"
//              placeholder="Name" 
//              name="name" 
//              value={name}
//              onChange={e=>change(e)}
//              required />
//           </div>
//           <div className="form-group">
//           <input type="lastName"
//            placeholder="lastName" 
//            name="lastName" 
//            value={lastName}
//            onChange={e=>change(e)}
//            required />
//         </div>
//           <div className="form-group">
//             <input type="email" 
//             placeholder="Email Address"
//              name="email" 
//              value={email}
//              onChange={e=>change(e)}
//              />
//             <small claclassNamess="form-text"
//               >This site uses Gravatar so if you want a profile image, use a
//               Gravatar email</small
//             >
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               minLength="6"
//               value={password}
//               onChange={e=>change(e)}
//             /> 
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               name="password2"
//               minLength="6"
//               value={password2}
//               onChange={e=>change(e)}
//             />
//           </div>
//           <input type="submit" className="btn btn-primary" value="Register" />
//         </form>
//         <p className="my-1">
//           Already have an account? <Link to="/login">Sign In</Link>
//         </p>
//       </section>
//         </div>
//     )
// }

// export default Register

import React from 'react';
import {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik , Field  } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@material-ui/core';
// import Page from 'src/components/Page';

import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const renderOptions = (options) => {
  return options.map((option) => (
    <FormControlLabel
      key={option}
      value={option}
      control={<Radio />}
      label={option}
    />
  ));
};

const FormikRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  options,
  children,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <React.Fragment>
      <RadioGroup {...field} {...props} name={fieldName}>
        {/* Here you either map over the props and render radios from them,
         or just render the children if you're using the function as a child*/}
        {options ? renderOptions(options) : children}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <span style={{ color: "red", fontFamily: "sans-serif" }}>
          {errors[fieldName]}
        </span>
      )}
    </React.Fragment>
  );
};

const Register = () => {
  const classes = useStyles();
  
 
  return (
    <div
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              name: '',
              lastName: '',
              password: '',
              // userType:'Candidate'
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                name: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                password: Yup.string().max(255).required('password is required'),
                // isRecruiter: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={async(values) => {
              // let isRecruiter = !(values.userType =='Candidate')
              // delete values.userType;
              const res = await axios.post('http://localhost:4150/users',{...values})
                            console.log('res', res);

              // navigate('/login', { replace: true })
              
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                            <Field
              name="userType"
              // options={["Recruiter","Candidate"]}
              component={FormikRadioGroup}
            />

                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </div>
  );
};

export default Register;
