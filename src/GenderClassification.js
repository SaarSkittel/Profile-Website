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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('./images/gender_classification/ml main.jpg')`,
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

const GenderClassification = () => {
  const classes = useStyle();
  return (
    <div className="maestro">
      <Box className={classes.hero}>
        <Box> Gender Classification From Text In Hebrew </Box>
      </Box>
      <Container className={classes.contentStyle}>
        <Chip
          clickable
          component="a"
          href="https://github.com/SaarSkittel/Machine-Learning-Gender-Classification-From-Text-In-Hebrew"
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
        This project was a final project in ML course. The project classify the gender of the composer of a given text in Hebrew.

The project is written in Python using Jupiter Notebook utilizing Pandas and scikit-learn libraries.
        </Typography>
      </Container>

      

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h4" component="div">
          Work Flow
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            Creating an Dataframe from corpus
        </Typography>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
          Tokenizing the texts using Hebrew tokenizer modified with filtering tokens of words that are not in Hebrew. Creating stop words file that has most common words in Hebrew who doesn’t indicate the gender of the writer
          </Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
        Creating a pipeline
        </Typography>
    
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">Vector – from trial and error it seem that count vectorizer works the best in this case with the stop words and tokenizer.</Typography>
          <Typography variant="body2" color="text.secondary">Normailzer- from trial and error it seem that l2 normailzer works the best in this case.</Typography>
          <Typography variant="body2" color="text.secondary">Classifier - using MLPClassifie r(neural networks) with max iterations of 200 , learning rate of 0.01 without shuffle and random state set to 0.</Typography>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
        Train results
        </Typography>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
          Used 80% of the data to train the model and 20% for validation.
          </Typography>
        </Container>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 550 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              image="/images/gender_classification/train result.png"
              alt="Train Result"
            />
          </Card>
        </Container>
      </Container>

      <Container className={classes.contentStyle}>
        <Typography gutterBottom variant="h5" component="div">
        Final results
        </Typography>
        <Container className={classes.contentStyle}>
          <Typography variant="body2" color="text.secondary">
          Used 100% of the data to train the model with a new test results.
          </Typography>
        </Container>
        <Container className={classes.contentStyle}>
          <Card sx={{ maxWidth: 550 }}>
            <CardMedia
              paddingTop="100px"
              component="img"
              image="images/gender_classification/final result.png"
              alt="Final Result"
            />
          </Card>
        </Container>
        
      </Container>

    </div>
  );
};
export default GenderClassification;
