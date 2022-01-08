import React, { Component } from "react";
import Slide from "react-reveal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Favorite Tech</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>
            </div>

            <div>
              <Grid container spacing={2}>
                <Grid item xs={8} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://miro.medium.com/max/380/1*OvMsmQs0Rzs_ScuiTsuWjw.png"
                      sx={{ height: 200 }}
                    />
                    <CardContent sx={{ height: 160 }}>
                      <Typography
                        textAlign={"center"}
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 900 }}
                        component="div"
                      >
                        Git
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
                        I've used Git for all of my projects so far. I have used
                        Git for version control in small teams and still looking
                        forward to toyed around with Git.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={8} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://logospng.org/wp-content/uploads/laravel.png"
                      sx={{ height: 200 }}
                    />
                    <CardContent sx={{ height: 160 }}>
                      <Typography
                        textAlign={"center"}
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 900 }}
                        component="div"
                      >
                        Laravel
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
                        Laravel was my first framework that I started using in
                        college years ago. It is by far the framework I am most
                        familiar with in terms of design pattern and OOP
                        programming.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={8} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://i.stack.imgur.com/dMXbE.png"
                      sx={{ height: 200 }}
                    />
                    <CardContent sx={{ height: 160 }}>
                      <Typography
                        textAlign={"center"}
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 900 }}
                        component="div"
                      >
                        Bootstrap
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
                        I use Bootstrap more often than not when designing the
                        layout for my sites. It is the framework I am most
                        familiar with and can therefore design more quickly than
                        with others.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={8} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://logowik.com/content/uploads/images/nodejs.jpg"
                      sx={{ height: 200 }}
                    />
                    <CardContent sx={{ height: 160 }}>
                      <Typography
                        textAlign={"center"}
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 900 }}
                        component="div"
                      >
                        Node.js
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
                        Node JS is my server-side scripting language of choice.
                        I'm frequently used it in my projects so far. It's one of the 
                        best server-side language for no doubt. 
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={8} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://static.cdnlogo.com/logos/m/47/mysql.svg"
                      sx={{ height: 200 }}
                    />
                    <CardContent sx={{ height: 160 }}>
                      <Typography
                        textAlign={"center"}
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 900 }}
                        component="div"
                      >
                        MySQL
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
                        I'm a big fan of MongoDB but MySQL is
                        my first Relational Database Language and I've used it in many projects. In my opinion ,
                         it is much more easy to learn and enjoyable to work with.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={8} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://cyberhatsolutions.com/wp-content/uploads/2020/10/react-js.png"
                      sx={{ height: 200 }}
                    />
                    <CardContent sx={{ height: 160 }}>
                      <Typography
                        textAlign={"center"}
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 900 }}
                        component="div"
                      >
                        React.js
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
                        I am fairly new to React and really did not like it at
                        first. It has grown on me though and I will continue to
                        use it going forward.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
