import React, { useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './landing.styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ChangeHistoryTwoToneIcon from '@material-ui/icons/ChangeHistoryTwoTone';
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
import axios from 'axios';
import { PostInterface } from '../../models/post.model';

export interface Props {
  posts: Array<PostInterface>, 
  isAuthenticated: boolean,
  redirect: (string) => void
}

export interface Dispatch {
  savePosts: (posts) => void
}

interface PropsCombined extends Props, Dispatch {
}

const sections = [
  'Announcements',
  'Events',
  'Issues',
];

const getPosts = async (savePosts) => {
  const formData = new FormData();

  const res = await axios.post(
      "/~cen4010fal19_g12/campus_snapshots/server/api/getposts/",
      formData
  );
  console.log(res.data);
  savePosts(res.data.posts);
}

// 1970-01-01 00:00:00
const formatDate = (date) => {
  console.log(date);
  let formattedDate = new Date(date.substring(0, 10) + 'T' + date.substring(11));
  return (formattedDate.toLocaleString('default', { month: 'short' }) + ' ' + String(formattedDate.getDate()) + ', ' + String(formattedDate.getFullYear()));
};

export default function Landing(props: PropsCombined) {
  const classes = useStyles();

  // componentDidMount
  useEffect(() => {
    if (!props.isAuthenticated) {
        props.redirect('/login');
    }
    else{
      getPosts(props.savePosts);
    }
  }, [])

  return (
    <div>
      {/* Start of banner */}
      <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                className={classes.welcome}
                component="h1" variant="h3" color="inherit" gutterBottom>
                Welcome to CampusSnapshots!
                  </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Here you can find the latest FAU events, announcements and issues
                  </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {/* End of banner */}
      <Toolbar component="nav" variant="dense" className={classes.postsToolbar}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Sort by</InputLabel>
          <Select
            defaultValue={1}
            input={<Input id="grouped-select" />}
          >
            <MenuItem value={1}>Latest</MenuItem>
            <MenuItem value={2}>Popular</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
      {/* All posts */}
      <Grid container spacing={2}>
        {props.posts ? props.posts.map(post => (
          <Grid item key={post.title} xs={12}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Grid container item xs={12} spacing={3} >
                      <Grid item md={1} xs={2}
                        className={classes.ratingZone}
                        direction="column">
                        <IconButton>
                          <ChangeHistoryTwoToneIcon />
                        </IconButton>
                        <h1 className={classes.ratingZone}>{post.votes}</h1>
                        <IconButton>
                          <DetailsTwoToneIcon />
                        </IconButton>
                      </Grid>
                      <Grid item md={11} xs={10}>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {/* {formatDate(post.created)} */}
                          {post.created}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.content}
                        </Typography>
                        <Grid container item xs={12} spacing={3}>
                          {
                            ["tag1", "tag2", "tag3"].map((tag, index) => {
                              return <Grid item xs={3} key={index}>
                                <Paper className={classes.postTag}>{tag}</Paper>
                              </Grid>
                            })
                          }
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={post.imgURL}
                    title={post.postId}
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
        )) : ""}
      </Grid>
      {/* End of all posts */}
    </div>
  );
}