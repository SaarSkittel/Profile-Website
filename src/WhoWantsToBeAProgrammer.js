import { Typography } from "@material-ui/core";
import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
const useStyle = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/trivia/montage.jpg')`,
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

const WhoWantsToBeAProgrammer = () => {
  const classes = useStyle();
  return (
    <div className="who_wants_to_be_a_programmer">
      <Box className={classes.hero}>
        <Box> Who Wants To Be A Programmer </Box>
      </Box>
      <Container className={classes.contentStyle}>
        <Chip
          clickable
          component="a"
          href="https://github.com/SaarSkittel/WhoWantsToBeAProgrammer"
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
          This app was my final project in android 1. The app was written in
          Java using android studio.
        </Typography>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Concept
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The app is a trivia app which its main preps is to educate people
          about programming. The question that are asked are multiple answer
          question and are gradually goes from easy to hard. The demographic of
          the app is from middle school kids and up which are interested in
          expanding and testing there knowledge in programming.
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
              image="/images/trivia/home.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            From this screen you can navigate to start the game and see the
            highest scores of the user how played the game.
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
          Gameplay{" "}
        </Typography>
        <Container className={classes.contentStyle}>
          <Card>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/trivia/levels.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            In the game you will have to 10 seconds to answer the questions you
            are given, in case you have answer wrong you have three strike. As
            you go on the game will gradually become harder and the indication
            of the level of difficulty will be presented by the background of
            the screen (green being easy, blue being medium and red is hard).
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
          Game over
        </Typography>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/trivia/game_over.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            In this screen you will have two options which are to play again or
            to go back to go back to the home screen furthermore the user score
            will be displayed on this screen.
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
          Scoreboard
        </Typography>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              height="600"
              image="/images/trivia/score.jpg"
              alt="Maestro Home"
            />
          </Card>
        </Container>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            In this screen the scores will be displayed with the names and the
            scores of the users that played the game.
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
          Technical Details
        </Typography>

        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            • Using animations.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Using internal storage.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Localization for English and Hebrew.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Using custom components.
          </Typography>
        </Container>
      </Container>
      <Container className={classes.contentStyle}>
        <Button target="_blank" href="http://www.google.com/">
          Google
        </Button>
      </Container>
    </div>
  );
};
export default WhoWantsToBeAProgrammer;
