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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/scalable_serving/scalable main.png')`,
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

const ScalableServing = () => {
  const classes = useStyle();
  return (
    <div className="scalable">
      <Box className={classes.hero}>
        <Box> Scalable Serving Project </Box>
      </Box>
      <Container className={classes.contentStyle}>
        <Chip
          clickable
          component="a"
          href="https://github.com/SaarSkittel/Scalable-Serving-Project"
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
          A project where I created a full - blown ecosystem that runs on Docker
          with a friendly UI, dynamic http serving backend written in
          NodeJS(express) and Python(Django) with two Nginx LoadBalancers.The
          project utilizes MySQL for user data, JWT, Graphite and Grafana to
          monitor the collect, store and analyze metrics from the services.
        </Typography>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Stack
        </Typography>
        <Typography variant="body2" color="text.secondary">
          NGINX Load balancer, JavaScript, Python, NodeJS, ExpressJS, Django,
          Django Rest Framework, ReactJS, MUI, MySQL, JWT, Grafana, Graphite.
        </Typography>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          System Architecture
        </Typography>
        <Container className={classes.contentStyle}>
          <Card>
            <CardMedia
              paddingTop="100px"
              component="img"
              image="./images/scalable_serving/Scalable Serving.png"
              alt="System diagram"
            />
          </Card>
        </Container>
      </Container>
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Technologies used
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Servers - This project utilizes three identical Node.js and Python
          servers to handle redundancy problems and it is using Express.js and
          Django.The servers functions as a REST API that handles http request
          from the Frontend.Those request modify, create, collected and delete
          data from the MySQL Database.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • MySQL - the API request modify, create, collected and delete data
          from the MySQL Database server.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • JWT - The requests that are sent to the server are authenticated by
          with both access token and refresh token to ensure fraud and identity
          theft.The access token is given to the user when he logs in it has an
          expiration time of an hour the user gets it in the response or when he
          request to refresh it when it is expired.The refresh token is also
          given when the user logs in and it is stored in the cookies as an
          HttpOnly so the refresh token only visible to the server.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Graphite - Monitor the collect, store and analyze metrics from the
          services.Gets all the status code reports, Database query times and
          user count made by the servers and shows them in graphs.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Grafana - Uses the data collected by graphite and give it a more
          pleasing UI representation.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Nginx Load Blancers - To handle high availability the load balancer
          send the request to the servers using the round robin(no persistency).
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Website - The Frontend is written in React.js using MaterialUI and
          it send all the requests to the servers and shows data that came from
          the responses.
        </Typography>
      </Container>
    </div>
  );
};
export default ScalableServing;
