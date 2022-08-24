import React, { Component } from "react";
import { Segment, Menu, Input, Grid } from "semantic-ui-react";

class MenuExamples extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Segment>
        <h1>MenuExamples</h1>
        <Segment>
          <Menu secondary>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="friends"
              active={activeItem === "friends"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
        <Segment>
          <Menu>
            <Menu.Item
              name="editorials"
              active={activeItem === "editorials"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="reviews"
              active={activeItem === "reviews"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="upcomingEvents"
              active={activeItem === "upcomingEvents"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
        <Segment>
          <Menu pointing>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="friends"
              active={activeItem === "friends"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
            </Menu.Menu>
          </Menu>

          <Segment>
            <img
              src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
              alt=""
            />
          </Segment>
        </Segment>
        <Segment>
          <Menu pointing secondary>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="friends"
              active={activeItem === "friends"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>

          <Segment>
            <img
              src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
              alt=""
            />
          </Segment>
        </Segment>
        <Segment>
          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name="bio"
                  active={activeItem === "bio"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="pics"
                  active={activeItem === "pics"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="companies"
                  active={activeItem === "companies"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="links"
                  active={activeItem === "links"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment>
                This is an stretched grid column. This segment will always match
                the tab height
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment>
    );
  }
}

export default MenuExamples;
