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

export interface Props {
  posts: Array<Object>, 
  isAuthenticated: boolean,
  redirect: (string) => void
}

export interface Dispatch {

}

interface PropsCombined extends Props, Dispatch {
}

const sections = [
  'Announcements',
  'Events',
  'Issues',
];

const featuredPosts = [
  {
    title: 'Post title',
    date: 'Nov 16, 2019',
    rating: 3,
    description:
      'Here we will have the post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
      'nostrud exercitation ullamco laboris nisi ut aliquip.',
    tags: ["tag1", "tag2", "tag3", "tag4"],
    image: "https://source.unsplash.com/random",
    postId: "1234"
  },
  {
    title: 'Post title',
    date: 'Nov 16, 2019',
    rating: 4,
    description:
      'Here we will have the post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
      'nostrud exercitation ullamco laboris nisi ut aliquip.',
    tags: ["tag1", "tag2"],
    image: "https://source.unsplash.com/random",
    postId: "1234"
  },
  {
    title: 'Post title',
    date: 'Nov 16, 2019',
    rating: 1,
    description:
      'Here we will have the post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
      'nostrud exercitation ullamco laboris nisi ut aliquip.',
    tags: ["tag1", "tag2", "tag3"],
    image: "https://source.unsplash.com/random",
    postId: "1234"
  }

];

export default function Landing(props: PropsCombined) {
  const classes = useStyles();

  // componentDidMount
  useEffect(() => {
    if (!props.isAuthenticated) {
        props.redirect('/login');
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
        {featuredPosts.map(post => (
          <Grid item key={post.title} xs={12}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Grid container item xs={12} spacing={3} >
                      <Grid item xs={1}
                        className={classes.ratingZone}
                        direction="column">
                        <IconButton>
                          <ChangeHistoryTwoToneIcon />
                        </IconButton>
                        <h1 className={classes.ratingZone}>{post.rating}</h1>
                        <IconButton>
                          <DetailsTwoToneIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={11} >
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Grid container item xs={12} spacing={3}>
                          {
                            post.tags.map((tag, index) => {
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
                    image={post.image}
                    title={post.postId}
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      {/* End of all posts */}
    </div>
  );
}