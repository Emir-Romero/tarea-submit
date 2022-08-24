import React from "react";
import { Segment, Card, Image, Icon, Button } from "semantic-ui-react";

const extra = (
  <a href>
    <Icon name="user" />
    16 Friends
  </a>
);

const src = "https://react.semantic-ui.com/images/wireframe/white-image.png";

const items = [
  {
    header: "Project Report - April",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    meta: "ROI: 30%",
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
];

const CardExamples = () => {
  return (
    <Segment>
      <h2>CardExamples</h2>
      <Segment>
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </Segment>
      <Segment>
        <Card
          image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Segment>
      <Segment>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group{" "}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/molly.png"
              />
              <Card.Header>Molly Thomas</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
              />
              <Card.Header>Jenny Lawrence</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Jenny requested permission to view your contact details
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
      <Segment>
        <Card.Group itemsPerRow={4}>
          <Card color="red" image={src} />
          <Card color="orange" image={src} />
          <Card color="yellow" image={src} />
          <Card color="olive" image={src} />
          <Card color="green" image={src} />
          <Card color="teal" image={src} />
          <Card color="blue" image={src} />
          <Card color="violet" image={src} />
          <Card color="purple" image={src} />
          <Card color="pink" image={src} />
          <Card color="brown" image={src} />
          <Card color="grey" image={src} />
        </Card.Group>
      </Segment>
      <Segment>
        <Card.Group centered items={items} />
      </Segment>
      <Segment>
        <Card.Group>
          <Card fluid color="red" header="Option 1" />
          <Card fluid color="orange" header="Option 2" />
          <Card fluid color="yellow" header="Option 3" />
        </Card.Group>
      </Segment>
    </Segment>
  );
};

export default CardExamples;
