import React from "react";
import { Segment, List, Image, Button } from "semantic-ui-react";

const ListExamples = () => {
  const sizes = ["mini", "tiny", "small", "large", "big", "huge", "massive"];
  return (
    <Segment>
      <h1>ListExamples</h1>
      <Segment>
        <h2>Comun List</h2>
        <List>
          <List.Item>Apples</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>
      </Segment>
      <Segment>
        <h2>Contact List</h2>
        <List>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>Semantic UI</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>New York, NY</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="mail" />
            <List.Content>
              <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="linkify" />
            <List.Content>
              <a href="http://www.semantic-ui.com">semantic-ui.com</a>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
      <Segment>
        <h2>Folder List</h2>
        <List>
          <List.Item>
            <List.Icon name="folder" />
            <List.Content>
              <List.Header>src</List.Header>
              <List.Description>Source files for project</List.Description>
              <List.List>
                <List.Item>
                  <List.Icon name="folder" />
                  <List.Content>
                    <List.Header>site</List.Header>
                    <List.Description>Your site's theme</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="folder" />
                  <List.Content>
                    <List.Header>themes</List.Header>
                    <List.Description>Packaged theme files</List.Description>
                    <List.List>
                      <List.Item>
                        <List.Icon name="folder" />
                        <List.Content>
                          <List.Header>default</List.Header>
                          <List.Description>
                            Default packaged theme
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="folder" />
                        <List.Content>
                          <List.Header>my_theme</List.Header>
                          <List.Description>
                            Packaged themes are also available in this folder
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="file" />
                  <List.Content>
                    <List.Header>theme.config</List.Header>
                    <List.Description>
                      Config file for setting packaged themes
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="folder" />
            <List.Content>
              <List.Header>dist</List.Header>
              <List.Description>Compiled CSS and JS files</List.Description>
              <List.List>
                <List.Item>
                  <List.Icon name="folder" />
                  <List.Content>
                    <List.Header>components</List.Header>
                    <List.Description>
                      Individual component CSS and JS
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="file" />
            <List.Content>
              <List.Header>semantic.json</List.Header>
              <List.Description>
                Contains build settings for gulp
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
      <Segment>
        <h2>Git Hub Repositories</h2>
        <List divided relaxed>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
              <List.Description as="a">Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
              <List.Description as="a">Updated 22 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
              <List.Description as="a">Updated 34 mins ago</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
      <Segment>
        <h2>People List</h2>
        <List>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
            />
            <List.Content>
              <List.Header as="a">Rachel</List.Header>
              <List.Description>
                Last seen watching{" "}
                <a href>
                  <b>Arrested Development</b>
                </a>{" "}
                just now.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
            />
            <List.Content>
              <List.Header as="a">Lindsay</List.Header>
              <List.Description>
                Last seen watching{" "}
                <a href>
                  <b>Bob's Burgers</b>
                </a>{" "}
                10 hours ago.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
            />
            <List.Content>
              <List.Header as="a">Matthew</List.Header>
              <List.Description>
                Last seen watching{" "}
                <a href>
                  <b>The Godfather Part 2</b>
                </a>{" "}
                yesterday.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
            />
            <List.Content>
              <List.Header as="a">Jenny Hess</List.Header>
              <List.Description>
                Last seen watching{" "}
                <a href>
                  <b>Twin Peaks</b>
                </a>{" "}
                3 days ago.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
            />
            <List.Content>
              <List.Header as="a">Veronika Ossi</List.Header>
              <List.Description>
                Has not watched anything recently
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
      <Segment>
        <div>
          {sizes.map((size) => (
            <div key={size}>
              <List divided horizontal size={size}>
                <List.Item>
                  <Image
                    avatar
                    src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                  />
                  <List.Content>
                    <List.Header>Helen</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image
                    avatar
                    src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
                  />
                  <List.Content>
                    <List.Header>Christian</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image
                    avatar
                    src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
                  />
                  <List.Content>
                    <List.Header>Daniel</List.Header>
                  </List.Content>
                </List.Item>
              </List>

              <br />
            </div>
          ))}
        </div>
      </Segment>
      <Segment>
        <List horizontal>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            />
            <List.Content verticalAlign="top">Top Aligned</List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            />
            <List.Content verticalAlign="middle">Middle</List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            />
            <List.Content verticalAlign="bottom">Bottom</List.Content>
          </List.Item>
        </List>
      </Segment>
      <Segment>
        <List divided verticalAlign="middle">
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/lena.png"
            />
            <List.Content>Lena</List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
            />
            <List.Content>Lindsay</List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/mark.png"
            />
            <List.Content>Mark</List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/molly.png"
            />
            <List.Content>Molly</List.Content>
          </List.Item>
        </List>
      </Segment>
    </Segment>
  );
};

export default ListExamples;
