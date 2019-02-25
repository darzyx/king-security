import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import brandLogo from "../media/favicon.png";

const menuStyleObj = {
  borderRadius: "0",
  margin: "0"
};

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted size="tiny" style={menuStyleObj}>
        <Menu.Item as={Link} name="home" onClick={this.handleItemClick} to="/">
          <img alt="Brand Logo" src={brandLogo} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            as={NavLink}
            exact
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/services"
            name="services"
            active={activeItem === "services"}
            onClick={this.handleItemClick}
          >
            Services
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/gallery"
            name="gallery"
            active={activeItem === "gallery"}
            onClick={this.handleItemClick}
          >
            Gallery
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/contact"
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          >
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
