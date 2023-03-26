import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import MediaCard from "./ProjectCard";
import ProjectCard from "./ProjectCard";
import { BrowserRouter as Route, Router, Switch, Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url('https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
  projectContainer: {
    paddingTop: theme.spacing(3),
  },
  projectTittle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyle();
  return (
    <div className="home">
      <Box className={classes.hero}>
        <Box> Saar Skittel </Box>{" "}
      </Box>{" "}
      <Container maxWidth="lg" className={classes.projectContainer}>
        <Typography variant="h4" className={classes.projectTittle}>
          Project{" "}
        </Typography>{" "}
        <Grid container spacing={3} marginBottom="100px">
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              name="Messaging System"
              image="./images/messaging_api/messaging main.png"
              description="A fully scalable RESTful messaging api that runs on Docker written in Python using Django and Django Rest Framework."
              link="/messaging_system"
            />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              name="Scalable Serving Project"
              image="./images/scalable_serving/scalable main.png"
              description="A full-blown ecosystem runs on Docker using ReactJS, NodeJS, Django, MySQL, Graphite and Grafana."
              link="/scaleable_serving"
            />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              name="Maestro"
              image="./images/maestro.png"
              description="Music learning app developed in Android Studio using Java."
              link="/maestro"
            />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              name="Music Player"
              image="./images/music_player.jpg"
              description="Music player app developed in Android Studio using Java."
              link="/music_player"
            />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              name="Who Want's To Be A Programmer"
              image="./images/programmer.png"
              description="Programming trivia game developed in Android Studio using Java."
              link="/who_wants_to_be_a_programmer"
            />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              name="Facebook Desktop App"
              image="./images/facebook.png"
              description="Facebook desktop app developed in C#."
              link="/facebook"
            />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              name="Yeelight Catalog App"
              image="./images/yeelight.jpg"
              description="A catalog app developed in Android Studio using Java."
              link="/yeelight"
            />
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </div>
  );
};
export default Home;
