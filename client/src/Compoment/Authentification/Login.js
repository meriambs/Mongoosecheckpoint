// import React , {useState}from 'react'
// import Navigation from '../Navigation';
// import axios from 'axios';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// const Login = () => {
//   const [formData,setFormData]=useState(
//     {
//       email:"",
      
     
//       password:"",
       
//     }
//   );
//   const { email , password }=formData;
//   const change=e=> setFormData({
//     ...formData, [e.target.name]:e.target.value
//   })

//   const submit = async (e) => {
//     const res = await axios.post('http://127.0.0.1:4150/Auth', e);
//     await localStorage.setItem('token', res.data.token);
//     console.log('u win');
    
//   }
//     return (
//         <div>
        
//         <section className="container">
//         <div className="alert alert-danger">
//           Invalid credentials
//         </div>
//         <h1 className="large text-primary">Sign In</h1>
//         <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
//         <form className="form" onSubmit={e=>submit(e)}>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               value={email}
//               onChange={e=>change(e)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={e=>change(e)}
//             />
//           </div>
//           <input type="submit" className="btn btn-primary" value="Login" />
//         </form>
//         <p className="my-1">
//           Don't have an account? <Link to="/register">Sign Up</Link>
//         </p>
//       </section>
//       </div>
//     )
// }

// export default Login

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from '../../icons/Facebook';
import GoogleIcon from '../../icons/Google';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Login = () => {
  const classes = useStyles();
  

  return (
    <div
      className={classes.root}
      title="Login"
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
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required'),
            })}
            onSubmit={async (values) => {
               const res = await axios.post('http://localhost:4150/auth', values);
              await localStorage.setItem('token', res.data.token);
              console.log('you did it')
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
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  mt={3}
                  mb={1}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
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
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    Sign up
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

export default Login;
