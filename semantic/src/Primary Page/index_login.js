import React  from "react";
import {
  Grid,
  Segment,
  Divider,
  Form,
  Button,
  Modal,
  Header,
  Icon,
  Checkbox,
} from "semantic-ui-react";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

function IndexLogin() {
  // var emailInput = document.getElementsByClassName("emailInput").value;
  // var passwordInput = document.getElementsByClassName("passwordInput").value;
  // const { log } = this.state;
  return (
    <div>
      <Segment>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
                className="emailInput"
              />
              <Form.Input
                icon="lock"
                placeholder="Password"
                iconPosition="left"
                label="Password"
                type="password"
                className="passwordInput"
              />
              <Button content="Login" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle" textAlign="center">
            <ModelSignIn />
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  );
}

export function ModelSignIn() {
  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ]

  const [ state,dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open,dimmer } = state;
  return (
    <Modal
      basic
      onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      dimmer={dimmer}
      open={open}
      size="small"
      trigger={
        <Button
          size="large"
          onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
        >
          Sing In
        </Button>
      }
    >
      <Header icon>
        <Icon name="sign-in" />
        Register
      </Header>
      <Modal.Content>
        <Segment.Group raised>
          <Segment>
            <Form>
              <Form.Group widths="equal">
                <Form.Input fluid label="First Name" placeholder="First Name" />
                <Form.Input fluid label="Last Name" placeholder="Last Name" />
                <Form.Select
                  label="Gender"
                  options={options}
                  placeholder="Gender"
                />
              </Form.Group>
              <Form.Group widths="two">
                <Form.Input label="Email" placeholder="Email" />
              </Form.Group>
              <Form.Group widths="two">
                <Form.Input label="Password" placeholder="Password" />
                <Form.Input
                  label="Confirm Password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
          </Segment>
        </Segment.Group>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          color="red"
          inverted
          onClick={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          <Icon name="remove" /> Escape
        </Button>
        <Button
          color="green"
          inverted
          onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
          <Icon name="checkmark" /> Sign In
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
export default IndexLogin;
