import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const github = this.props.data.github;
    const facebook = this.props.data.facebook;
    const gmail = this.props.data.gmail;
    const linkedin = this.props.data.linkedin;

    return (
      <header id="home">
        
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1>{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            
              <ul className="social">
                <a href={facebook} className="btn">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href={github} className="btn">
                  <i className="fa fa-github"></i>
                </a>
                <a href={linkedin} className="btn">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href={gmail} className="btn">
                  <i className="fa fa-envelope"></i>
                </a>
              </ul>
        
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
