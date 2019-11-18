import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image'
import CampusSnapshotsLogo from "../../assets/logo/campusSnapshotLogo.png";
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import useStyles from './appbar.styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import ChangeHistoryTwoToneIcon from '@material-ui/icons/ChangeHistoryTwoTone';
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';

export interface Props {
    children?: Array<any>,
    username: string 
}

export interface Dispatch {
    signUserOut?: () => void
}

interface PropsCombined extends Props, Dispatch {
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CampusSnapshots
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const sections = [
  'Announcements',
  'Events',
  'Issues',
];


export default function CampusSnapshotsAppBar(props: PropsCombined) {
  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg">

        <Toolbar className={classes.toolbar}>
          <img
            src={CampusSnapshotsLogo}
            style={{
              height: "50px",
              paddingRight: "10px"
            }}
          />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.logoTitle}
          >
            CampusSnapshots
          </Typography>
          <div className={classes.grow} />
          {/* <IconButton>
            <SearchIcon />
          </IconButton> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button
            size="large"
            className={classes.button}
            endIcon={<AccountCircleOutlinedIcon />}
          >
            <div className={classes.userName}>User Name</div>
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
          <FormControl className={classes.formControl}>
            <Fab
              variant="extended"
              aria-label="like"
              color="primary"
              className={classes.fab}
              size="medium">
              <EditIcon className={classes.createPost} />
              Create a new post
           </Fab>
          </FormControl>
        </Toolbar>

<main>
{/* The main content should go here */}
    {props.children}

    </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            CampusSnapshots
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Never miss campus news!
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
