import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu>
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
          </Link>

          <Link to="/Elements">
            <Menu.Item
              name="elements"
              active={activeItem === "elements"}
              onClick={this.handleItemClick}
            >
              Elements
            </Menu.Item>
          </Link>
          <Link to="/Colections">
            <Menu.Item
              name="colections"
              active={activeItem === "colections"}
              onClick={this.handleItemClick}
            >
              Colections
            </Menu.Item>
          </Link>
          <Link to='/Views'>
          <Menu.Item
              name="views"
              active={activeItem === "views"}
              onClick={this.handleItemClick}
            >
              Views
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    );
  }
}
