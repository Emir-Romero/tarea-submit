import React from "react";
import { Feed, Icon, Segment, Header } from "semantic-ui-react";

const image = "https://react.semantic-ui.com/images/avatar/small/jenny.jpg";
const date = "3 days ago";
const summary = "You added Jenny Hess to your coworker group.";

const image2 = "https://react.semantic-ui.com/images/avatar/small/helen.jpg";
const date2 = "3 days ago";
const summary2 = "Helen Troy added 2 photos";
const extraImages = [
  "https://react.semantic-ui.com/images/wireframe/image.png",
  "https://react.semantic-ui.com/images/wireframe/image-text.png",
];

const FeedExamples = () => {
  return (
    <Segment>
      <h2>FeedExamples</h2>
      <Segment>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                alt=""
              />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a href>Helen Troy</a> added <a href>2 new illustrations</a>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a href>
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
                </a>
                <a href>
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
                </a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />1 Like
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
            <Feed.Content>
              <Feed.Summary
                date="2 Days Ago"
                user="Jenny Hess"
                content="add you as a friend"
              />
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />8 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a href>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Ours is a life of constant reruns. We're always circling back to
                where we'd we started, then starting all over again. Even if we
                don't run extra laps that day, we surely will come back for more
                of the same another day soon.
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a href>Justen Kitsune</a> added <a href>2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a href>
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
                </a>
                <a href>
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
                </a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />
                  41 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
      <Segment>
        <Feed>
          <Feed.Event
            image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
            content="You added Elliot Fu to the group Coworkers"
          />
          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
            <Feed.Content content="You added Elliot Fu to the group Coworkers" />
          </Feed.Event>
        </Feed>
      </Segment>
      <Segment>
        <Feed>
          <Feed.Event
            icon="pencil"
            date="Today"
            summary="You posted on your friend Stevie Feliciano's wall."
          />

          <Feed.Event>
            <Feed.Label icon="pencil" />
            <Feed.Content
              date="Today"
              summary="You posted on your friend Stevie Feliciano's wall."
            />
          </Feed.Event>
        </Feed>
      </Segment>
      <Segment>
        <Feed>
          <Feed.Event image={image} date={date} summary={summary} />

          <Feed.Event>
            <Feed.Label image={image} />
            <Feed.Content date={date} summary={summary} />
          </Feed.Event>
        </Feed>
      </Segment>
      <Segment>
        <Feed>
          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
            <Feed.Content>
              <Feed.Summary
                content="You added Jenny Hess to your coworker group."
                date="3 days ago"
              />
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
      <Segment>
        <Feed>
          <Feed.Event
            image={image2}
            date={date2}
            summary={summary2}
            extraImages={extraImages}
          />

          <Feed.Event>
            <Feed.Label image={image2} />
            <Feed.Content
              date={date2}
              summary={summary2}
              extraImages={extraImages}
            />
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image={image2} />
            <Feed.Content>
              <Feed.Date content={date2} />
              <Feed.Summary content={summary2} />
              <Feed.Extra images={extraImages} />
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
      <Segment>
        <Feed size="small">
          <Header as="h4">Followers Activity</Header>

          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>
                <a href>Elliot Fu</a> added <a href>Jenny Hess</a> as a friend
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>
                <a href>Stevie Feliciano</a> added <a href>Elliot Fu</a> as a friend
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>
                <a href>Helen Troy</a> added <a href>Christian Rocha</a> as a friend
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>
                <a href>Christian Rocha</a> signed up for the site.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
    </Segment>
  );
};

export default FeedExamples;
