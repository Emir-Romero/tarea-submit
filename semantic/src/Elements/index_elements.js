import React from "react";
import { Segment } from "semantic-ui-react";
import ButtonsExamples from "./components/buttons";
import IconExamples from "./components/icons";
import InputExamples from "./components/inputs";
import ListExamples from "./components/list";

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
