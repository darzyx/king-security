import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import brandLogo from "./media/logo.png";

const menuStyleObj = {
  borderRadius: "0",
  margin: "0"
};

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: null };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted stackable style={menuStyleObj}>
        <Menu.Item>
          <img alt="Brand Logo" src={brandLogo} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>
          <Menu.Item
            name="services"
            active={activeItem === "services"}
            onClick={this.handleItemClick}
          >
            Services
          </Menu.Item>
          <Menu.Item
            name="gallery"
            active={activeItem === "gallery"}
            onClick={this.handleItemClick}
          >
            Gallery
          </Menu.Item>
          <Menu.Item
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
