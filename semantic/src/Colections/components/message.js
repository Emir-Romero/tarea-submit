import React from "react";
import { Segment, Message, Icon, Form, Button } from "semantic-ui-react";

const items = [
  "You can now have cover images on blog pages",
  "Drafts will now auto-save while writing",
];

const MessageExamples = () => {
  return (
    <Segment>
      <h1>MessageExamples</h1>
      <Segment>
        <h3>Colored Message</h3>
        <Message color="red">Red</Message>
        <Message color="orange">Orange</Message>
        <Message color="yellow">Yellow</Message>
        <Message color="olive">Olive</Message>
        <Message color="green">Green</Message>
        <Message color="teal">Teal</Message>
        <Message color="blue">Blue</Message>
        <Message color="violet">Violet</Message>
        <Message color="purple">Purple</Message>
        <Message color="pink">Pink</Message>
        <Message color="brown">Brown</Message>
        <Message color="black">Black</Message>
      </Segment>
      <Segment>
        <h3>Size Message</h3>
        <Message size="mini">This is a mini message.</Message>
        <Message size="tiny">This is a tiny message.</Message>
        <Message size="small">This is a small message.</Message>
        <Message size="large">This is large</Message>
        <Message size="big">This is big</Message>
        <Message size="huge">This is huge</Message>
        <Message size="massive">This is massive</Message>
      </Segment>
      <Segment>
        <Message
          header="Changes in Service"
          content="We updated our privacy policy here to better service our customers. We recommend reviewing the changes."
        />
      </Segment>
      <Segment>
        <Message>
          <Message.Header>New Site Features</Message.Header>
          <Message.List items={items} />
        </Message>
      </Segment>
      <Segment>
        <Message icon>
          <Icon name="circle notched" loading />
          <Message.Content>
            <Message.Header>Just one second</Message.Header>
            We are fetching that content for you.
          </Message.Content>
        </Message>
      </Segment>
      <Segment>
        <Message
          icon="inbox"
          header="Have you heard about our mailing list?"
          content="Get the best news in your e-mail every day."
        />
      </Segment>
      <Segment>
        <h3>Hidden Message</h3>
        <Message hidden>You can't see me</Message>
        <br />
        <h3>Visible Message</h3>
        <Message visible>You can always see me</Message>
      </Segment>
      <Segment>
        <h3>Floating Message</h3>
        <Message floating content="Way to go!" />
      </Segment>
      <Segment>
        <h3>Info Message</h3>
        <Message
          info
          header="Was this what you wanted?"
          content="Did you know it's been a while?"
        />
      </Segment>
      <Segment>
        <h3>Warning Message</h3>
        <Message
          warning
          header="You must register before you can do that!"
          content="Visit our registration page, then try again."
        />
      </Segment>
      <Segment>
        <h3>Success Message</h3>
        <Message
          success
          header="Your user registration was successful"
          content="You may now log-in with the username you have chosen"
        />
      </Segment>
      <Segment>
        <h3>Error Message</h3>
        <Message
          error
          header="There was some errors with your submission"
          list={[
            "You must include both a upper and lower case letters in your password.",
            "You need to select your home country.",
          ]}
        />
      </Segment>
      <Segment>
        <h3>Attached Message</h3>
        <Message
          attached
          header="Welcome to our site!"
          content="Fill out the form below to sign-up for a new account"
        />
        <Form className="attached fluid segment">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First Name"
              placeholder="First Name"
              type="text"
            />
            <Form.Input
              fluid
              label="Last Name"
              placeholder="Last Name"
              type="text"
            />
          </Form.Group>
          <Form.Input label="Username" placeholder="Username" type="text" />
          <Form.Input label="Password" type="password" />
          <Form.Checkbox inline label="I agree to the terms and conditions" />
          <Button color="blue">Submit</Button>
        </Form>
        <Message attached="bottom" warning>
          <Icon name="help" />
          Already signed up? <a href>Login here</a> instead.
        </Message>
      </Segment>
    </Segment>
  );
};

export default MessageExamples;
