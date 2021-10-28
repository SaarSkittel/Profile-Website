import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/system";

const useStyle = makeStyles((theme) => ({

    subtitleStyle: {
      paddingTop: "100px",
      color: "#000",
    },
    contentStyle: {
      paddingTop: "50px",
      color: "#000",
    },
  }));
const AboutMe=()=>{
    const classes = useStyle();
    return(
        <div>
            <Container className={classes.subtitleStyle}>
                <Typography variant="h4">
                    Hey there! 👋
                </Typography>
                <Divider/>
            </Container>
            <Container className={classes.contentStyle}>
                <Typography variant="h6"> My name is Saar Skittel.</Typography>
                <Typography variant="h6"> I am a Computer Science graduate and I am looking for a developer position.</Typography>
                <Typography variant="h6">I love to learn new and experience new challeniging things.</Typography>
                <Typography className={classes.subtitleStyle} variant="h5">Coding Lenguages and Development Tools I know:</Typography>
                <Divider/>
                <Container className={classes.contentStyle}>
                    <Typography variant="h6">•	C.</Typography>
                    <Typography variant="h6">•	C++ and basic knowledge of DSP using JUCE Framework (self-thought).</Typography>
                    <Typography variant="h6">•	C# and .NET Framework.</Typography>
                    <Typography variant="h6">•	Java, Java SWING and Java Android development using Android Studio.</Typography>
                    <Typography variant="h6">•	Python, OpenCV Framework and Machine Learning using sklearn.</Typography>      
                    <Typography variant="h6">•	SQL – SQLite and MySQL.</Typography>      
                    <Typography variant="h6">•	Using container with Docker.</Typography>
                    <Typography variant="h6">•	Working with Jira.</Typography> 
                    <Box className={classes.contentStyle}>
                    <Chip
                    color="secondary"
                    clickable
                    component="a"
                    href="https://github.com/SaarSkittel"
                    icon={<GitHubIcon />}
                    label="See All My Projects"
                    variant="outlined"
                    />             
                    </Box>  
                </Container>
                <Typography className={classes.subtitleStyle} variant="h5">Contact Me:</Typography>
                <Divider/>
                <Container>
                    <Stack direction="row"  className={classes.contentStyle} >
                <Chip
                    color="error"
                    sx={{ mx: "auto"}}
                    clickable
                    component="a"
                    href="mailto:saar2304@gmail.com"
                    icon={<MailOutlineIcon />}
                    label="Send Mail"
                    variant="outlined"
                    />
                <Chip
                 color="primary"
                    sx={{ mx: "auto"}}
                    clickable
                    component="a"
                    href="https://www.linkedin.com/in/saar-skittel-9588621b5/"
                    icon={<LinkedInIcon />}
                    label="LinkedIn"
                    variant="outlined"
                    />
                    </Stack>
                </Container>
            </Container>
        </div>
    );
}
export default AboutMe;