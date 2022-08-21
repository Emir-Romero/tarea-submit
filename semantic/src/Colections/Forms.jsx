import React, { Component } from "react";
import { Segment, Form, Message, Button, Divider } from "semantic-ui-react";

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

class FormExamples extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Segment>
        <h1>FormExamples</h1>

        <Segment>
          <h3>From Subcomponents</h3>
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid label="First name" placeholder="First name" />
              <Form.Input fluid label="Last name" placeholder="Last name" />
              <Form.Select
                fluid
                label="Gender"
                options={options}
                placeholder="Gender"
              />
            </Form.Group>
            <Form.Group inline>
              <label>Size</label>
              <Form.Radio
                label="Small"
                value="sm"
                checked={value === "sm"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Medium"
                value="md"
                checked={value === "md"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Large"
                value="lg"
                checked={value === "lg"}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea
              label="About"
              placeholder="Tell us more about you..."
            />
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>

        <Segment>
          <h3>Form Loading</h3>
          <Form loading>
            <Form.Input label="Email" placeholder="joe@schmoe.com" />
            <Button>Submit</Button>
          </Form>
        </Segment>

        <Segment>
          <h3>Form Success</h3>
          <Form success>
            <Form.Input label="Email" placeholder="joe@schmoe.com" />
            <Message
              success
              header="Form Completed"
              content="You're all signed up for the newsletter"
            />
            <Button>Submit</Button>
          </Form>
        </Segment>

        <Segment>
          <h3>Form Error</h3>
          <Form>
            <Form.Input
              error={{
                content: "Please enter your first name",
                pointing: "below",
              }}
              fluid
              label="First name"
              placeholder="First name"
              id="form-input-first-name"
            />
            <Form.Input
              error="Please enter your last name"
              fluid
              label="Last name"
              placeholder="Last name"
            />
            <Form.Checkbox
              label="I agree to the Terms and Conditions"
              error={{
                content: "You must agree to the terms and conditions",
                pointing: "left",
              }}
            />
          </Form>
        </Segment>

        <Segment>
          <div>
            {sizes.map((size) => (
              <Form size={size} key={size}>
                <Form.Group widths="equal">
                  <Form.Field
                    label="First name"
                    control="input"
                    placeholder="First name"
                  />
                  <Form.Field
                    label="Last name"
                    control="input"
                    placeholder="Last name"
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
                <Divider hidden />
              </Form>
            ))}
          </div>
        </Segment>
      </Segment>
    );
  }
}

export default FormExamples;
