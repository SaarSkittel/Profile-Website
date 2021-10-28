import { Typography } from "@material-ui/core";
import * as React from "react";
import { makeStyles } from '@material-ui/core';
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import MediaCard from "./ProjectCard";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ClassSharp } from "@material-ui/icons";
import Button from "@mui/material/Button"
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
const useStyle = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/music_player/music_player_montage.jpg')`,
    paddingTop:"50px",
    height: "500px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
    mainPicture:{
      
      paddingTop:"100px",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        height: 300,
      
      },
    },
    subtitleStyle:{
      paddingTop:"100px",
      color:"#000"
    },
    contentStyle:{
      paddingTop:"50px",
      color:"#000"
    },
  
}));

const MusicPlayer = () => {
  const classes = useStyle();
  return (
    <div className='musicPlayer'>
      <Box className={classes.hero}>
      <Box> Music Player </Box>
      </Box>
      <Container className={classes.contentStyle}>
        <Chip clickable component="a" href="https://github.com/SaarSkittel/Music-Player" icon={<GitHubIcon />} label="See Code" variant="outlined" />
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">Introduction</Typography>
        <Typography variant="body2" color="text.secondary">
        This app is a project made in Java using android studio. It is a music player that functions on music url  to play music.
        </Typography>
      </Container>


      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">App Flow</Typography>
        <Typography gutterBottom variant="h5" component="div">Home Screen</Typography>
        <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="650"
        image="/images/music_player/home.jpg"
        alt="Play List Home"
      /></Card>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography variant="body2" color="text.secondary">
        The home screen consist of the list of songs, controls of the player and the option to add more songs to the list.
        When clicking on a song you will have the option to change the details of the song (change name in case the metadata was wrong and add a photo).
        </Typography>
        </Container>
      </Container>
      <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="650"
        image="/images/music_player/change.jpg"
        alt="Play List Change"
      /></Card>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">Add a Photo Screen </Typography>
        <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="650"
        image="/images/music_player/add_photo.jpg"
        alt="Maestro Home"
      /></Card>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography variant="body2" color="text.secondary">
        When adding or editing the details of a song you will have the option to add a photo.
        In this screen you will chose between adding a photo from the library or from take a picture from the camera.
        </Typography>
        </Container>
      </Container>
      
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">Technical Details</Typography>
        
      <Container className={classes.contentStyle}>
      <Typography variant="body2" color="text.secondary">•  Using foreground service.</Typography>
      <Typography variant="body2" color="text.secondary">•  Using custom notifications.</Typography>
      <Typography variant="body2" color="text.secondary">•  Using camera.</Typography>
      <Typography variant="body2" color="text.secondary">•	Using fragments.</Typography>

        </Container>
      </Container>

    </div>
  );
};
export default MusicPlayer;
