import React from 'react'
import { Segment } from 'semantic-ui-react'
import FormExamples from './Forms'
import MenuExamples from './Menu'
import MessageExamples from './Message'
import TableExamples from './Table'

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