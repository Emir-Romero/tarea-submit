import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class Navbar extends Component{
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render(){
    const { activeItem } = this.state
    return (
        <Menu>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
    
          <Menu.Item
            name="buttons"
            active={activeItem === "button"}
            onClick={this.handleItemClick}
          >
            Button
          </Menu.Item>
    
          <Menu.Item
            name="menu"
            active={activeItem === "menu"}
            onClick={this.handleItemClick}
          >
            Menu
          </Menu.Item>
        </Menu>
      );
  }
};


