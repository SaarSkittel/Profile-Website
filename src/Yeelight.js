import { Typography } from "@material-ui/core";
import * as React from "react";
import { makeStyles } from '@material-ui/core';
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import MediaCard from "./ProjectCard";
import { ClassSharp } from "@material-ui/icons";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button"
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
const useStyle = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/yeelight/montage.jpg')`,
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

const Yeelight = () => {
  const classes = useStyle();
  return (
    <div className='maestro'>
      <Box className={classes.hero}>
      <Box> Yeelight Catalog App</Box>
      </Box>
      <Container className={classes.contentStyle}>
        <Chip
          clickable
          component="a"
          href="https://github.com/SaarSkittel/YeelightCatalogApp"
          icon={<GitHubIcon />}
          label="See Code"
          variant="outlined"
        />
      </Container>
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">Introduction</Typography>
        <Typography variant="body2" color="text.secondary">
        This app was my project in android 1. The app was written in Java using android studio.
        </Typography>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">App Flow</Typography>
        <Typography gutterBottom variant="h5" component="div">Main screen </Typography>
        <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="600"
        image="/images/yeelight/main.jpg"
        alt="Maestro Home"
      /></Card>
      </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">Menu Screen  </Typography>
        <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="600"
        image="/images/yeelight/menu.jpg"
        alt="Maestro Home"
      /></Card>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography variant="body2" color="text.secondary">
        Has all the options that the user can do in the app such as: go to product list, contact us, schedule a meeting and enter a complaint.
        </Typography>
        </Container>
      </Container>
      
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">Products Screen</Typography>
        <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="600"
        image="/images/yeelight/products.jpg"
        alt="Maestro Home"
      /></Card>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography variant="body2" color="text.secondary">
        Consist of a recycle view with some of yeelight’s products.
        </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">Contact Us</Typography>
        <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="600"
        image="/images/yeelight/contact.jpg"
        alt="Maestro Home"
      /></Card>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography variant="body2" color="text.secondary">
        Has the Activity hours, to save the company’s number directly into the phones contacts, navigate to the store by opening waze with the destination and to make a direct call to the company.
        </Typography>
        </Container>
      </Container>
      
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">Schedule a Meeting</Typography>
        <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="600"
        image="/images/yeelight/meeting.jpg"
        alt="Maestro Home"
      /></Card>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography variant="body2" color="text.secondary">
        Let’s you decide when you want to make a meeting and saves it in the phones calendar.
        </Typography>
        </Container>
        </Container>

        <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">Make a Complaint</Typography>
        <Container className={classes.contentStyle}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        paddingTop="100px"
        component="img"
        height="600"
        image="/images/yeelight/complaint.jpg"
        alt="Maestro Home"
      /></Card>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography variant="body2" color="text.secondary">
        In this screen there are two fields to write the subject and the complaint and the option to add a picture from the device or take a photo from the camera. When clicking send it will open your mail and enter the detail to the mail
        </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
      <Button target="_blank" href="http://www.google.com/">Google</Button>
      </Container>
    </div>
  );
};
export default Yeelight;
