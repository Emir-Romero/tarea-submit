import React from "react";
import { Segment, Item, Image, Icon } from "semantic-ui-react";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);
const paragraph2 = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

const items = [
  {
    childKey: 0,
    image: "https://react.semantic-ui.com/images/wireframe/image.png",
    header: "Header",
    description: "Description",
    meta: "Metadata",
    extra: "Extra",
  },
  {
    childKey: 1,
    image: "https://react.semantic-ui.com/images/wireframe/image.png",
    header: "Header",
    description: "Description",
    meta: "Metadata",
    extra: "Extra",
  },
];

const ItemExamples = () => {
  return (
    <Segment>
      <h2>ItemExamples</h2>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header as="a">Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header as="a">Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Item.Group items={items} />
      </Segment>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header>Arrowhead Valley Camp</Item.Header>
              <Item.Meta>
                <span className="price">$1200</span>
                <span className="stay">1 Month</span>
              </Item.Meta>
              <Item.Description>{paragraph}</Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header>Buck's Homebrew Stayaway</Item.Header>
              <Item.Meta content="$1000 2 Weeks" />
              <Item.Description>{paragraph}</Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />
            <Item.Content header="Arrowhead Valley Camp" meta="$1200 1 Month" />
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Item.Group link>
          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
            />

            <Item.Content>
              <Item.Header>Stevie Feliciano</Item.Header>
              <Item.Description>{paragraph2}</Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
            />

            <Item.Content>
              <Item.Header>Veronika Ossi</Item.Header>
              <Item.Description>{paragraph2}</Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            />

            <Item.Content>
              <Item.Header>Jenny Hess</Item.Header>
              <Item.Description>{paragraph2}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            />

            <Item.Content verticalAlign="middle">
              <Item.Header>
                <Icon name="like" />
                Veronika Ossi
              </Item.Header>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/justen.jpg"
            />

            <Item.Content verticalAlign="middle">
              <Item.Header>
                <Icon name="favorite" />
                Justen Kitsune
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment>
  );
};

export default ItemExamples;
