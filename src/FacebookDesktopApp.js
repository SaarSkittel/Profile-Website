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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/facebook/home.png')`,
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

const FacebookDesktopApp = () => {
  const classes = useStyle();
  return (
    <div className="facebook">
      <Box className={classes.hero}>
        <Box> Facebook Desktop App </Box>{" "}
      </Box>{" "}
      <Container className={classes.contentStyle}>
        <Chip
          clickable
          component="a"
          href="https://github.com/SaarSkittel/Facebook-Desktop-App"
          icon={<GitHubIcon />}
          label="See Code"
          variant="outlined"
        />
      </Container>{" "}
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Introduction{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          Facebook desktop app created in C# as a part of design pattern course.{" "}
        </Typography>{" "}
      </Container>
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Concept{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          This app main purpose is to implement and understand common design
          patterns.This app uses Facebook API and Facebook wrapper made by the
          course lecturer.{" "}
        </Typography>{" "}
      </Container>
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          App Flow{" "}
        </Typography>{" "}
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
            When you first run the app there greeted with the sign in .after
            signing in you will be presented with your home page that consists
            of your liked pages, favorite teams, friends, events, friends
            birthday, albums, posts and the option to send a post.{" "}
          </Typography>{" "}
        </Container>{" "}
        <Container className={classes.contentStyle}>
          <Card>
            <CardMedia
              paddingTop="100px"
              component="img"
              image="/images/facebook/home.png"
              alt="Home"
            />
          </Card>{" "}
        </Container>{" "}
      </Container>
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Design Patterns Used{" "}
        </Typography>{" "}
        <Container className={classes.contentStyle}> </Container>
        <Container className={classes.contentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            Static Factory Class{" "}
          </Typography>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="body2" color="text.secondary">
              In the app there is polymorph clock family for both event count
              down and birthday count down.That is why we created a static class
              that will be in charge of creating the clock with a static method.{" "}
            </Typography>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Sequence Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/factory_seq.png"
                alt="factory_seq"
              />
            </Card>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Class Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/factory_class.png"
                alt="Maestro Home"
              />
            </Card>{" "}
          </Container>{" "}
        </Container>
        <Container className={classes.contentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            Façade{" "}
          </Typography>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="body2" color="text.secondary">
              To make the logic layer encapsulated from the UI there was a need
              to create a façade class.This class handles all the
              subsystems(like User, LoginResult, Clock and LoginDetails) so the
              UI uses only simplified actions.{" "}
            </Typography>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Sequence Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/facade_seq.png"
                alt="factory_seq"
              />
            </Card>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Class Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/facade_class.png"
                alt="Maestro Home"
              />
            </Card>{" "}
          </Container>{" "}
        </Container>
        <Container className={classes.contentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            Adapter{" "}
          </Typography>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="body2" color="text.secondary">
              The app uses collections which the UI can’ t use.So there was a
              need to create an adapter between the collections to a format that
              the UI can use.{" "}
            </Typography>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Sequence Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/adapter_seq.png"
                alt="factory_seq"
              />
            </Card>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Class Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/adapter_class.png"
                alt="Maestro Home"
              />
            </Card>{" "}
          </Container>{" "}
        </Container>
        <Container className={classes.contentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            Strategy{" "}
          </Typography>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="body2" color="text.secondary">
              In the app there are different types of collections.So to avoid
              duplicating code when using the adapter we used strategy to
              maintain the adapting relevant and to assist in further
              maintenance.{" "}
            </Typography>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Sequence Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/strategy_seq.png"
                alt="factory_seq"
              />
            </Card>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Class Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/startegy_class.jpg"
                alt="Maestro Home"
              />
            </Card>{" "}
          </Container>{" "}
        </Container>
        <Container className={classes.contentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            Observer{" "}
          </Typography>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="body2" color="text.secondary">
              The observer was used in order inform the UI that a change was
              made in the user data.{" "}
            </Typography>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Sequence Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/observer_seq.png"
                alt="factory_seq"
              />
            </Card>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Class Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/observer_class.png"
                alt="Maestro Home"
              />
            </Card>{" "}
          </Container>{" "}
        </Container>
        <Container className={classes.contentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            Decorator{" "}
          </Typography>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="body2" color="text.secondary">
              We used decorator to inform visually when an update was made by
              blinking and making a sound where a change was made.{" "}
            </Typography>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Sequence Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/decorator_seq.png"
                alt="factory_seq"
              />
            </Card>{" "}
          </Container>{" "}
          <Container className={classes.contentStyle}>
            <Typography variant="h6" color="text.secondary">
              Class Diagram{" "}
            </Typography>{" "}
            <Card>
              <CardMedia
                paddingTop="100px"
                component="img"
                image="/images/facebook/decorator_class.png"
                alt="Maestro Home"
              />
            </Card>{" "}
          </Container>{" "}
        </Container>{" "}
      </Container>{" "}
    </div>
  );
};
export default FacebookDesktopApp;
