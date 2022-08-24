import _ from 'lodash'
import React, { Component } from "react";
import { Segment, Statistic, Divider } from "semantic-ui-react";

const sizes = ['mini', 'tiny', 'small', 'large', 'huge']
class StatisticExamples extends Component {
  state = { size: sizes[0] };

  handleSizeChange = (e) => this.setState({ size: e.target.value });
  render() {
    const { size } = this.state;
    return (
      <Segment>
        <h2>StatisticExamples</h2>
        <Segment>
          <Statistic>
            <Statistic.Value>5,550</Statistic.Value>
            <Statistic.Label>Downloads</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic size="mini">
            <Statistic.Label>Views</Statistic.Label>
            <Statistic.Value>2,204</Statistic.Value>
          </Statistic>
          <Divider />

          <Statistic size="tiny">
            <Statistic.Label>Views</Statistic.Label>
            <Statistic.Value>2,204</Statistic.Value>
          </Statistic>
          <Divider />

          <Statistic size="small">
            <Statistic.Label>Views</Statistic.Label>
            <Statistic.Value>2,204</Statistic.Value>
          </Statistic>
          <Divider />

          <Statistic>
            <Statistic.Label>Views</Statistic.Label>
            <Statistic.Value>2,204</Statistic.Value>
          </Statistic>
          <Divider />

          <Statistic size="large">
            <Statistic.Label>Views</Statistic.Label>
            <Statistic.Value>2,204</Statistic.Value>
          </Statistic>
          <Divider />

          <Statistic size="huge">
            <Statistic.Label>Views</Statistic.Label>
            <Statistic.Value>2,204</Statistic.Value>
          </Statistic>
        </Segment>
        <Segment>
          <select onChange={this.handleSizeChange}>
            {_.map(sizes, (s) => (
              <option key={s} value={s}>
                {_.startCase(s)}
              </option>
            ))}
          </select>

          <Divider hidden />

          <Statistic.Group size={size}>
            <Statistic>
              <Statistic.Value>22</Statistic.Value>
              <Statistic.Label>Faves</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>31,200</Statistic.Value>
              <Statistic.Label>Views</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>22</Statistic.Value>
              <Statistic.Label>Members</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
      </Segment>
    );
  }
}

export default StatisticExamples;
