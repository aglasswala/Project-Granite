// import React, { Component } from 'react'
import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

import { AppBar, Toolbar, Typography, Icon, IconButton, withStyles, Avatar, SvgIcon} from '@material-ui/core'

// import navbarStyles from '../styles/navbarStyles'

const GitHub = (props) => {
    return (
        <SvgIcon htmlColor="white">
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />,
        </SvgIcon>
    )
}

// class NavBar extends Component {

//     render() {
//         const { classes } = this.props
//         return ( 
//             <div>
//                 <AppBar position="fixed">
//                     <Toolbar>
//                         <Icon href="#"className={classes.icon}>
//                             <Avatar src="https://image.flaticon.com/icons/svg/484/484531.svg"/>
//                         </Icon>
//                         <Typography variant="h6" className={classes.title}>
//                             Project Granite
//                         </Typography>
//                         <IconButton href="//github.com/aglasswala/Project-Granite" target="_blank" title="Github Repository" aria-label="Github Repository" >
//                             <GitHub className={classes.icon} />
//                         </IconButton>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         )
//     }
// }



// reactstrap components

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-primary"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
            >
              <IconButton href="//github.com/aglasswala/Project-Granite" target="_blank" title="Github Repository" aria-label="Github Repository" >
                <GitHub />
              </IconButton>
              <span>Project </span>
              Granite
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Nav navbar>
            <NavItem>
              <NavLink  to="/">
                someone put something here
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                someone put something here
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
