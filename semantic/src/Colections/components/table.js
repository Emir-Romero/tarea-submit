import React from "react";
import {
  Segment,
  Table,
  Menu,
  Icon,
  Label,
  Header,
  Rating,
  Image,
  Button,
  Checkbox,
} from "semantic-ui-react";

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const TableExamples = () => {
  return (
    <Segment>
      <h1>TableExamples</h1>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>First</Label>
              </Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
      <Segment>
        <h3>Rating Table</h3>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
              <Table.HeaderCell>Effect</Table.HeaderCell>
              <Table.HeaderCell>Efficacy</Table.HeaderCell>
              <Table.HeaderCell>Consensus</Table.HeaderCell>
              <Table.HeaderCell>Comments</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h2" textAlign="center">
                  A
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>Power Output</Table.Cell>
              <Table.Cell>
                <Rating icon="star" defaultRating={4} maxRating={5} />
              </Table.Cell>
              <Table.Cell textAlign="right">
                80% <br />
                <a href>18 studies</a>
              </Table.Cell>
              <Table.Cell>
                Creatine supplementation is the reference compound for
                increasing muscular creatine levels; there is variability in
                this increase, however, with some nonresponders.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h2" textAlign="center">
                  A
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>Weight</Table.Cell>
              <Table.Cell>
                <Rating icon="star" defaultRating={5} maxRating={5} />
              </Table.Cell>
              <Table.Cell textAlign="right">
                100% <br />
                <a href>65 studies</a>
              </Table.Cell>
              <Table.Cell>
                Creatine is the reference compound for power improvement, with
                numbers from one meta-analysis to assess potency
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
      <Segment>
        <h3>Person Table</h3>
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee</Table.HeaderCell>
              <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                    rounded
                    size="mini"
                  />
                  <Header.Content>
                    Lena
                    <Header.Subheader>Human Resources</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>22</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                    rounded
                    size="mini"
                  />
                  <Header.Content>
                    Matthew
                    <Header.Subheader>Fabric Design</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>15</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                    rounded
                    size="mini"
                  />
                  <Header.Content>
                    Lindsay
                    <Header.Subheader>Entertainment</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>12</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/mark.png"
                    rounded
                    size="mini"
                  />
                  <Header.Content>
                    Mark
                    <Header.Subheader>Executive</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>11</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
      <Segment>
        <h3>Git Repository</h3>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3">Git Repository</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="folder" /> node_modules
              </Table.Cell>
              <Table.Cell>Initial commit</Table.Cell>
              <Table.Cell collapsing textAlign="right">
                10 hours ago
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="folder" /> test
              </Table.Cell>
              <Table.Cell>Initial commit</Table.Cell>
              <Table.Cell textAlign="right">10 hours ago</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="folder" /> build
              </Table.Cell>
              <Table.Cell>Initial commit</Table.Cell>
              <Table.Cell textAlign="right">10 hours ago</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="file outline" /> package.json
              </Table.Cell>
              <Table.Cell>Initial commit</Table.Cell>
              <Table.Cell textAlign="right">10 hours ago</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="file outline" /> Gruntfile.js
              </Table.Cell>
              <Table.Cell>Initial commit</Table.Cell>
              <Table.Cell textAlign="right">10 hours ago</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
      <Segment>
        <h3>Advanced Table</h3>
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Registration Date</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
              <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox slider />
              </Table.Cell>
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox slider />
              </Table.Cell>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>January 11, 2014</Table.Cell>
              <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox slider />
              </Table.Cell>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> Add User
                </Button>
                <Button size="small">Approve</Button>
                <Button disabled size="small">
                  Approve All
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
      <Segment>
        <h3>Color Table</h3>
        {colors.map((color) => (
          <Table color={color} key={color} inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Food</Table.HeaderCell>
                <Table.HeaderCell>Calories</Table.HeaderCell>
                <Table.HeaderCell>Protein</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Apples</Table.Cell>
                <Table.Cell>200</Table.Cell>
                <Table.Cell>0g</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Orange</Table.Cell>
                <Table.Cell>310</Table.Cell>
                <Table.Cell>0g</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        ))}
      </Segment>
    </Segment>
  );
};

export default TableExamples;
