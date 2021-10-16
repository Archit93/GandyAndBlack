// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Copyright from './common/CopyRight';
// import { useHistory } from "react-router-dom";

// const SignIn = (props) => {
//     const history = useHistory();
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         // eslint-disable-next-line no-console
//         console.log({
//             email: data.get('email'),
//             password: data.get('password'),
//         });
//     };

//     return (<>

//         <Grid container component="main" sx={{ height: '100vh' }}>
//             <CssBaseline />
//             <Grid
//                 item
//                 xs={false}
//                 sm={4}
//                 md={7}
//                 sx={{
//                     backgroundImage: 'url(https://source.unsplash.com/random)',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundColor: (t) =>
//                         t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             />
//             <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                 <Box
//                     sx={{
//                         my: 8,
//                         mx: 4,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign in
//             </Typography>
//                     <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                         />
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                         />
//                         <FormControlLabel
//                             control={<Checkbox value="remember" color="primary" />}
//                             label="Remember me"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Sign In
//               </Button>
//                         <Grid container>
//                             <Grid item xs>
//                                 <Link href="#" variant="body2">
//                                     Forgot password?
//                   </Link>
//                             </Grid>
//                             <Grid item>
//                                 <Link
//                                     component="button"
//                                     variant="body2"
//                                     onClick={() => {
//                                         history.push('/signup')
//                                     }}
//                                 >
//                                     {"Don't have an account? Sign Up"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                         <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
//             Contact Us
//           </Typography>
//                         <Copyright sx={{ mt: 5 }} />
//                     </Box>
//                 </Box>
//             </Grid>
//         </Grid>
//     </>)
// }

// export default SignIn

import * as React from 'react';
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
	const history = useHistory();
    return(
        <div className="row">
		<div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
			<div id="world-map-wrapper">
				<img src="./GB-COLLECTIONS-DERMAL-FILLERS.jpg" alt="login background image" />
			</div>
		</div>
		<div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
			<header id="header"><img src="./newlogo.png" alt="" /></header>
			<div id="login">
				<div role="main">
					 <form method="post">
						<div className="form">
							<label for="login-email" className="label">Email</label>
							<input  id="login-email" type="email" required />
						</div>
						<div className="form">
							<label for="login-password" className="label">Password</label>
							<input  id="login-password" type="password" required />
						</div>
						<div className="form">
							<button className="btn-link" type="submit" 
							onClick={() => {
                                        history.push('/signup')
                                    }}>Forgot password ?</button>
						</div>
						<div className="form">
							<button className="btn btn-lg btn-main" type="submit">Login</button>
						</div>
						<div className="form">
							<button className="btn-link" type="submit">Not a member? Register</button>
						</div>
					</form>
				</div>
				<footer>
					<p><small>&copy;  2021 Copyright. GANDY & BLACK AESTHETICS</small></p>
				</footer>
			</div>			
		</div>
	</div>
    )
}
export default SignIn;