import React from "react";
import { Segment } from "semantic-ui-react";
import CardExamples from "./components/card";
import CommentExamples from "./components/comment";
import FeedExamples from "./components/feed";
import ItemExamples from "./components/items";
import StatisticExamples from "./components/statistic";

const IndexViews = () => {
  return (
    <div>
      <h1>Views</h1>
      <Segment>
        <CardExamples />
        <CommentExamples />
        <FeedExamples />
        <StatisticExamples />
        <ItemExamples />
      </Segment>
    </div>
      
  );
};

export default IndexViews;
