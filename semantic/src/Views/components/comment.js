import React, { Component } from "react";
import {
  Segment,
  Comment,
  Header,
  Form,
  Button,
  Icon,
  Checkbox,
} from "semantic-ui-react";
class CommentExamples extends Component {
  state = { collapsed: true };

  handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked });

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Segment>
          <h3>CommentExamples</h3>
          <Segment>
            <Comment.Group>
              <Header as="h3" dividing>
                Comments
              </Header>

              <Comment>
                <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <div>Yesterday at 12:30AM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>
                      This has been very useful for my research. Thanks as well!
                    </p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                    <Comment.Content>
                      <Comment.Author as="a">Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <div>Just now</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        Elliot you are always so right :)
                      </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <div>5 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    Dude, this is awesome. Thanks so much
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  primary
                />
              </Form>
            </Comment.Group>
          </Segment>
          <Segment>
            <Comment.Group>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
                />
                <Comment.Content>
                  <Comment.Author>Stevie Feliciano</Comment.Author>
                  <Comment.Metadata>
                    <div>2 days ago</div>
                    <div>
                      <Icon name="star" />5 Faves
                    </div>
                  </Comment.Metadata>
                  <Comment.Text>
                    Hey guys, I hope this example comment is helping you read
                    this documentation.
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Segment>
          <Segment>
            <Comment.Group>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author>Tom Lukic</Comment.Author>
                  <Comment.Text>
                    This will be great for business reports. I will definitely
                    download this.
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    <Comment.Action>Save</Comment.Action>
                    <Comment.Action>Hide</Comment.Action>
                    <Comment.Action>
                      <Icon name="expand" />
                      Full-screen
                    </Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Segment>
          <Segment>
            <Comment.Group>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author>Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <div>1 day ago</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>
                      The hours, minutes and seconds stand as visible reminders
                      that your effort put them all there.
                    </p>
                    <p>
                      Preserve until your next run, when the watch lets you see
                      how Impermanent your efforts are.
                    </p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
                />
                <Comment.Content>
                  <Comment.Author>Christian Rocha</Comment.Author>
                  <Comment.Metadata>
                    <div>2 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>I re-tweeted this.</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button
                  content="Add Comment"
                  labelPosition="left"
                  icon="edit"
                  primary
                />
              </Form>
            </Comment.Group>
          </Segment>
          <Segment>
            <Checkbox
              defaultChecked
              label="Collapse comments"
              onChange={this.handleCheckbox}
            />

            <Comment.Group>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Christian Rocha</Comment.Author>
                  <Comment.Metadata>
                    <span>2 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    I'm very interested in this motherboard. Do you know if it'd
                    work in a Intel LGA775 CPU socket?
                  </Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group collapsed={collapsed}>
                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Elliot Fu</Comment.Author>
                      <Comment.Metadata>
                        <span>1 day ago</span>
                      </Comment.Metadata>
                      <Comment.Text>No, it wont</Comment.Text>
                      <Comment.Actions>
                        <a href>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>

                    <Comment.Group>
                      <Comment>
                        <Comment.Avatar
                          as="a"
                          src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                        />
                        <Comment.Content>
                          <Comment.Author as="a">Jenny Hess</Comment.Author>
                          <Comment.Metadata>
                            <span>20 minutes ago</span>
                          </Comment.Metadata>
                          <Comment.Text>Maybe it would.</Comment.Text>
                          <Comment.Actions>
                            <a href>Reply</a>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  </Comment>
                </Comment.Group>
              </Comment>
            </Comment.Group>
          </Segment>
          <Segment>
            <Comment.Group threaded>
              <Header as="h3" dividing>
                Comments
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <span>Yesterday at 12:30AM</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>
                      This has been very useful for my research. Thanks as well!
                    </p>
                  </Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <span>Just now</span>
                      </Comment.Metadata>
                      <Comment.Text>
                        Elliot you are always so right :)
                      </Comment.Text>
                      <Comment.Actions>
                        <a href>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <span>5 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    Dude, this is awesome. Thanks so much
                  </Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  primary
                />
              </Form>
            </Comment.Group>
          </Segment>
          <Segment>
            <Comment.Group size="mini">
              <Header as="h3" dividing>
                Mini Comments
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <span>5 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    Dude, this is awesome. Thanks so much
                  </Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
            <Comment.Group size="small">
              <Header as="h3" dividing>
                Small Comments
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <span>5 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    Dude, this is awesome. Thanks so much
                  </Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
            <Comment.Group size="large">
              <Header as="h3" dividing>
                Large Comments
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <span>5 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    Dude, this is awesome. Thanks so much
                  </Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
            <Comment.Group size="massive">
              <Header as="h3" dividing>
                Massive Comments
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <span>5 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    Dude, this is awesome. Thanks so much
                  </Comment.Text>
                  <Comment.Actions>
                    <a href>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default CommentExamples;
