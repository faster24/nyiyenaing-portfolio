import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      console.log(projectImage);
      return projectImage;
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div>
                <Grid container spacing={2}>
                  <Grid item xs={8} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="images/portfolio/chat.jpg"
                        sx={{ height: 200 }}
                      />
                      <CardContent sx={{ height: 100 }}>
                        <Typography
                          textAlign={"center"}
                          gutterBottom
                          variant="h5"
                          sx={{ fontWeight: 900 }}
                          component="div"
                        >
                          React Chat App
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<VisibilityOutlinedIcon />}
                          href="https://keen-mccarthy-1acc79.netlify.app"
                        >
                          View Demo
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={8} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="images/portfolio/movie-app.jpg"
                        sx={{ height: 200 }}
                      />
                      <CardContent sx={{ height: 100 }}>
                        <Typography
                          textAlign={"center"}
                          gutterBottom
                          variant="h5"
                          sx={{ fontWeight: 900 }}
                          component="div"
                        >
                          Movie Info
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<VisibilityOutlinedIcon />}
                          href = 'http://movie-app-io.herokuapp.com/'
                        >
                          View Demo
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={8} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="images/portfolio/memories.jpg"
                        sx={{ height: 200 }}
                      />
                      <CardContent sx={{ height: 100 }}>
                        <Typography
                          textAlign={"center"}
                          gutterBottom
                          variant="h5"
                          sx={{ fontWeight: 900 }}
                          component="div"
                        >
                          Memories App
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<VisibilityOutlinedIcon />}
                          href = "https://amazing-montalcini-1dc247.netlify.app"
                        >
                          View Demo
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={8} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="images/portfolio/portfolio-pic.png"
                        sx={{ height: 200 }}
                      />
                      <CardContent sx={{ height: 100 }}>
                        <Typography
                          textAlign={"center"}
                          gutterBottom
                          variant="h5"
                          sx={{ fontWeight: 900 }}
                          component="div"
                        >
                          Personal Portfolio
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<VisibilityOutlinedIcon />}
                          href="https://vigilant-torvalds-d9301d.netlify.app"
                        >
                          View Demo
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
