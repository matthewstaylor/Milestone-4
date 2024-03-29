import React, {useEffect} from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signUserIn } from "../../redux/actions/Landing/landing.actions";

export interface Props {
  isAuthenticated: boolean,
  redirect: (route) => void
}

export interface Dispatch {
  signUserIn: (userId: string) => void
}

interface PropsCombined extends Props, Dispatch {
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const submit = async (signUserIn: (userId: string) => void) => {
  const username = (document.getElementById("username") as HTMLFormElement)
    .value;
  const password = (document.getElementById("password") as HTMLFormElement)
    .value;

  const formData = new FormData();

  formData.append("username", username);
  formData.append("password", password);

  const res = await axios.post(
    "/~cen4010fal19_g12/campus_snapshots/server/api/login/",
    formData
  );

  // Everything that follows should be to set the dispatch an
  // action to the redux store, setting "user_id" to the value
  // of the z_number. This should be stored in a cookie on the
  // client's browser and checked by the server on every api call
  // to verify the user is actually in fact, signed in.
  console.log(res.data);
  if (res.data.cod === "200") {
    signUserIn(res.data.username);
  }
};

export default function SignIn(props: PropsCombined) {
  const classes = useStyles();

  useEffect(() => {
    if (props.isAuthenticated) {
      props.redirect('/');
    }
  });


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => submit(props.signUserIn)}
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
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
