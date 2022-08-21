import React from "react";
import { Segment } from "semantic-ui-react";
import ButtonsExamples from "./Buttons";
import IconExamples from "./Icons";
import InputExamples from "./Inputs";
import ListExamples from "./List";

const IndexElements = () => {
  return (
    <>
      <Segment>
        <h1>Elements</h1>
        <ButtonsExamples />
        <InputExamples />
        <IconExamples />
        <ListExamples />
      </Segment>
    </>
  );
};

export default IndexElements;
