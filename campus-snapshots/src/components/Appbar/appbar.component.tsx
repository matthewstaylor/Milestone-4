import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CampusSnapshotsLogo from "../../assets/logo/campusSnapshotLogo.png";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import useStyles from './appbar.styles';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  //@ts-ignore
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


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
            {/* @ts-ignore */}
            <div className={classes.userName} onClick={handleClick}>{props.username}</div>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
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
