import React from "react";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { makeStyles } from "@material-ui/core";
import Item from "@mui/material/";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Container } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  main: {
    marginTop: "200px",
    height: "200px",
    textAlign: "center",
  },
}));
const Links = () => {
  const classes = useStyle();
  return (
    <Container className={classes.main}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6} md={4}>
          <IconButton href="mailto:saar2304@gmail.com">
            <MailOutlineIcon fontSize="large" color="error" />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <IconButton href="https://github.com/SaarSkittel">
            <GitHubIcon color="secondary" fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <IconButton href="https://www.linkedin.com/in/saar-skittel-9588621b5/">
            <LinkedInIcon color="info" fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Links;
