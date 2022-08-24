import React from 'react'
import { Segment } from 'semantic-ui-react'
import FormExamples from "./components/forms";
import MenuExamples from "./components/menu";
import MessageExamples from "./components/message";
import TableExamples from "./components/table";

const IndexColections = () => {
  return (
    <Segment>
        <h1>IndexColections</h1>
        <FormExamples/>
        <MenuExamples/>
        <MessageExamples/>
        <TableExamples/>
    </Segment>
  )
}

export default IndexColections