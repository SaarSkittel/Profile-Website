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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/messaging_api/messaging main.png')`,
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

const MessagingSystem = () => {
  const classes = useStyle();
  return (
    <div className="messaging">
      <Box className={classes.hero}>
        <Box> Messaging System </Box>{" "}
      </Box>{" "}
      <Container className={classes.contentStyle}>
        <Chip
          clickable
          component="a"
          href="https://github.com/SaarSkittel/Messaging-API"
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
          A fully scalable RESTful messaging api that runs on Docker written in
          Python using Django and Django Rest Framework with Celery for
          asynchronous tasking, Redis message broker and Postgres for a DB.The
          project is implementing microservices architecture and uses
          technologies like: JWT, replication streaming, middleware and
          monitoring.{" "}
        </Typography>{" "}
      </Container>{" "}
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Stack{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          Docker, AWS, NGINX, Gunicorn, Django, Django rest Framework, Celery,
          Celery Flower, Redis, Postgres, PGPool, PGAdmin and DJDT.{" "}
        </Typography>{" "}
      </Container>{" "}
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          System Architecture{" "}
        </Typography>{" "}
        <Container className={classes.contentStyle}>
          <Card>
            <CardMedia
              paddingTop="100px"
              component="img"
              image="./images/messaging_api/messaging diagram.png"
              alt="System diagram"
            />
          </Card>{" "}
        </Container>{" "}
      </Container>{" "}
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Functionality{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Write Message - Sends a message to specified user.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Read Message - Read the last message from a specied user.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Delete Message - Deletes a nessage from the users conversations.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Get All Messages - Get all messages from specied user.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Get Unread Messages - Get all unread messages from specied user.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Authentication - Authenticate username and password and returns
          access token and refresh token.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Register - Signs a new user to the system.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Token - Refresh a new access token.{" "}
        </Typography>{" "}
      </Container>{" "}
      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Technologies used{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • NGINX - Used as an API gateway.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Gunicorn - uesd as web service gateway interface.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Microservices - The project has two services one handle
          authentication requsts and the other for messages read and write
          requests.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • SimpleJWT - The requests that are sent to the server are
          authenticated by with both access token and refresh token to ensure
          fraud and identity theft.The access token is given to the user when he
          logs in it has an expiration time of an 5 minutes the user gets it in
          the response or when he request to refresh it when it is expired.The
          refresh token is also given when the user logs in and it is stored in
          the cookies as an HttpOnly so the refresh token only visible to the
          server.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Postgres - Created two Postgres databases for scalability purposes
          synchronized with steaming replication.the main handle both read and
          write requests and the salve handle onlt read requests.The databases
          handle all conversations, messages and users data using Django bulit -
          in user system and custom models.Optinized queries using
          select_related to minimize the amout of SQL queries needed for a
          single action.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • PGPool - Serves as a load balncer between the two Postgres databases
          and routes the request dependig one the operation(write operation to
          main and read operation to both main and slave).{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • PGAdmin - Used to monitor and manage Postgres datadases.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • DJDT - Used to optimize query requests and maximize response time of
          requests.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Middleware - Middleware was used to insure tokens validation before
          executing requests.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Celery - Creatad Celery worker to make the API requests and resppnse
          work Asynchronous.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Celery Flower - Monitors the Celery worker and tasks.{" "}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          • Redis - Used as Celery Broker to store results from tasks.{" "}
        </Typography>{" "}
      </Container>{" "}
    </div>
  );
};
export default MessagingSystem;
