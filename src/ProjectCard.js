import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import { CardActionArea } from "@mui/material";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 700,
  },
  description: {
    height: 100,
  },
}));

export default function MediaCard(props) {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <Link to={props.link} component={CardActionArea}>
        <CardMedia
          className={classes.media}
          component="img"
          height="150"
          image={props.image}
          alt={props.name}
        />{" "}
        <CardContent className={classes.description}>
          <Typography gutterBottom variant="h5" component="div">
            {" "}
            {props.name}{" "}
          </Typography>{" "}
          <Typography variant="body2" color="text.secondary">
            {" "}
            {props.description}{" "}
          </Typography>{" "}
        </CardContent>{" "}
      </Link>{" "}
    </Card>
  );
}
