import React, { Component, createRef } from "react";
import { Menu, Sticky } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  contextRef = createRef();
  render() {
    const { activeItem } = this.state;
    return (
      <div ref={this.contextRef}>
        <Sticky innerRef={this.createRef}>
          <Menu inverted>
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
            <Link to="/Views">
              <Menu.Item
                name="views"
                active={activeItem === "views"}
                onClick={this.handleItemClick}
              >
                Views
              </Menu.Item>
            </Link>
          </Menu>
        </Sticky>
      </div>
    );
  }
}
