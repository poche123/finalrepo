import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from "axios";
import { Input } from '@mui/material';
import config from "../../config";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login(props) {

     const [loginForm, setloginForm] = useState({
       email: "",
       password: ""
     })
 
     function logMeIn(event) {
       axios({
         method: "POST",
         url:(config.apiUrl + "/token"),
         data:{
           email: loginForm.email,
           password: loginForm.password
          }
       })
       .then((response) => {
         props.setToken(response.data.access_token)
       }).catch((error) => {
         if (error.response) {
           console.log(error.response)
           console.log(error.response.status)
           console.log(error.response.headers)
           }
       })
 
       setloginForm(({
         email: "",
         password: ""}))
 
       event.preventDefault()
     }
 
     function handleChange(event) { 
       const {value, name} = event.target
       setloginForm(prevNote => ({
           ...prevNote, [name]: value})
       )}
       

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://xoio.de/wp-content/uploads/2015/01/Iberia_Inflight_above_the_clouds_by_xoio.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
           
           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>


        
            <Input onChange={handleChange}  
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  text={loginForm.email} 
                  name="email" 
                  placeholder="Email" 
                  value={loginForm.email} 
                  />
            <Input onChange={handleChange} 
                  type="password"
                  text={loginForm.password} 
                  name="password" 
                  placeholder="Password" 
                  value={loginForm.password}
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  id="password"
                  autoComplete="current-password" />

     
              <Button 
                onClick={logMeIn}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
             
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
           
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
 }




// <div>
// <h1>Login</h1>
//   <form className="login">
//     <input onChange={handleChange}  
//           type="email"
//           text={loginForm.email} 
//           name="email" 
//           placeholder="Email" 
//           value={loginForm.email} />
//     <input onChange={handleChange} 
//           type="password"
//           text={loginForm.password} 
//           name="password"   
//           placeholder="Password" 
//           value={loginForm.password} />

//   <button onClick={logMeIn}>Submit</button>
// </form>
// </div>