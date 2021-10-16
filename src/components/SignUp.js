// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { useHistory } from "react-router-dom";

// const SignUp = () => {
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

//     return (
//         <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//                 sx={{
//                     marginTop: 8,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                 }}
//             >
//                 <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign up
//           </Typography>
//                 <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 autoComplete="fname"
//                                 name="firstName"
//                                 required
//                                 fullWidth
//                                 id="firstName"
//                                 label="First Name"
//                                 autoFocus
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="lastName"
//                                 label="Last Name"
//                                 name="lastName"
//                                 autoComplete="lname"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 autoComplete="email"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 autoComplete="new-password"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <FormControlLabel
//                                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                                 label="I want to receive inspiration, marketing promotions and updates via email."
//                             />
//                         </Grid>
//                     </Grid>
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         sx={{ mt: 3, mb: 2 }}
//                     >
//                         Sign Up
//             </Button>
//                     <Grid container justifyContent="flex-end">
//                         <Grid item>
//                             <Link
//                                 component="button"
//                                 variant="body2"
//                                 onClick={() => {
//                                     history.push('/')
//                                 }}
//                             >
//                                 {"Already have account? Sign in"}
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
//         </Container>
//     );
// }
// export default SignUp;

import * as React from 'react';
import { useHistory } from "react-router-dom";
const SignUp = () => {
    const history = useHistory();
    return (
        <div className="row">
		<div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
			<div id="world-map-wrapper">
				<img src="./GB-COLLECTIONS-DERMAL-FILLERS.jpg" alt="login background image" />
			</div>
		</div>
		<div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
			<header id="header"><img src="./newlogo.png" alt="" /></header>
        <div id="signup">
				<div role="main">
					 <form method="post">
					 	<div className="form">
							<label for="signup-firstname" className="label">Firstname</label>
							<input  id="signup-firstname" type="email" required />
						</div>
						<div className="form">
							<label for="signup-lastname" className="label">Lastname</label>
							<input  id="signup-lastname" type="email" required />
						</div>
						<div className="form">
							<label for="signup-password" className="label">Create your password</label>
							<input  id="signup-password" type="password" required />
						</div>
						<div className="form">
							<button className="btn-link" type="submit" onClick={() => {
									history.push('/')
								}}>Already have an account? Login</button>
						</div>
						<div className="form">
							<button className="btn btn-lg btn-main" type="submit">Signup</button>
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

export default SignUp;