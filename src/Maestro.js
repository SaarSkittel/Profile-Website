import { Typography } from "@material-ui/core";
import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
const useStyle = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/maestro/maestro_montage.jpg')`,
    paddingTop: "50px",
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
  mainPicture: {
    paddingTop: "100px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  subtitleStyle: {
    paddingTop: "100px",
    color: "#000",
  },
  contentStyle: {
    paddingTop: "50px",
    color: "#000",
  },
}));

const Maestro = () => {
  const classes = useStyle();
  return (
    <div className="maestro">
      <Box className={classes.hero}>
        <Box> Maestro </Box>
      </Box>
      <Container className={classes.contentStyle}>
        <Chip
          clickable
          component="a"
          href="https://github.com/SaarSkittel/Maestro"
          icon={<GitHubIcon />}
          label="See Code"
          variant="outlined"
        />
      </Container>
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Introduction
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Maestro was a my final project in android 2 course. Maestro is a music
          learning app design to help people to learn there favorite instrument.
          The app is written in Java using android studio and uses Firebase to
          handle messaging, online storage and database.
        </Typography>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Functionality
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The client has the option to choose from all courses. Every course has
          different subjects that have their lessons that the client can pick
          from. Every lesson is provided in video format and has a chat for
          asking question and guidance. In addition the client can interact with
          other users and the teachers to ask personal question and make
          friends.
        </Typography>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          App Flow
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Home Screen
        </Typography>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/maestro/maestro_home.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            The home screen consist of all the instrument courses that the app
            is offering. In addition, when logged in the side screen navigate to
            the chats or to the notifications screen. When clicking on a course
            if the user is registered to the course it will navigate directly to
            the course page. Otherwise it will navigate to the registration
            screen.
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
          Registration{" "}
        </Typography>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/maestro/maestro_about.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            This screen has the details and the description of the course. This
            screen will show up when there isn’t a user connected or user isn’t
            register to the course.
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
          Course
        </Typography>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/maestro/maestro_course.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            The course screen consists of the chapters with different subjects,
            each subject has different lessons that the user can have.
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
          Lesson
        </Typography>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/maestro/maestro_lesson.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            The lesson consist of the lesson video and a chat that the users can
            use to ask question and guidance.
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
          Chats
        </Typography>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/maestro/maestro_chats.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            The chats screen consist of two tabs. One is the chats that have all
            of the history conversation that the user made with other users.
          </Typography>
        </Container>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/maestro/maestro_contacts.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            The second tab is the contacts all of the users that are registered
            to the app.
          </Typography>
        </Container>
      </Container>
      <Container className={classes.contentStyle}></Container>
    </div>
  );
};
export default Maestro;
