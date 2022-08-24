import React from "react";
import { Segment, Icon } from "semantic-ui-react";
const IconExamples = () => {
  return (
    <Segment>
      <h1>Icon Examples</h1>
      <Segment>
        <h2>Colored Icons</h2>
        <p>Podemos cambiar el color de los iconos usando <b>color=""</b></p>
        <Icon color="red" name="users" />
        <Icon color="orange" name="users" />
        <Icon color="yellow" name="users" />
        <Icon color="olive" name="users" />
        <Icon color="green" name="users" />
        <Icon color="teal" name="users" />
        <Icon color="blue" name="users" />
        <Icon color="violet" name="users" />
        <Icon color="purple" name="users" />
        <Icon color="pink" name="users" />
        <Icon color="brown" name="users" />
        <Icon color="grey" name="users" />
        <Icon color="black" name="users" />
      </Segment>
      <Segment inverted>
        <h2>Inverted Colors</h2>
        <p>Podemos invertir los colores usando la propiedad <b>inverted</b></p>
        <Icon inverted color="red" name="users" />
        <Icon inverted color="orange" name="users" />
        <Icon inverted color="yellow" name="users" />
        <Icon inverted color="olive" name="users" />
        <Icon inverted color="green" name="users" />
        <Icon inverted color="teal" name="users" />
        <Icon inverted color="blue" name="users" />
        <Icon inverted color="violet" name="users" />
        <Icon inverted color="purple" name="users" />
        <Icon inverted color="pink" name="users" />
        <Icon inverted color="brown" name="users" />
        <Icon inverted color="grey" name="users" />
        <Icon inverted color="black" name="users" />
      </Segment>
      <Segment>
        <h2>Loading Icons</h2>
        <p>Podemos hacer que los iconos parescan que estan cargando usando <b>loading</b></p>
        <Icon loading size="large" name="spinner" />
        <Icon loading size="large" name="certificate" />
        <Icon loading size="large" name="asterisk" />
      </Segment>
      <Segment>
        <h2>Links Icons</h2>
        <p>Podemos hacer que los iconos se parescan a links usando la propiedad <b>link</b></p>
        <Icon link name="close" />
        <Icon link name="help" />
      </Segment>
      <Segment>
        <h2>Circular Icons</h2>
        <p>Podemos hacer que los iconos tengan un borde circular usando <b>Circular</b></p>
        <Icon circular name="users" />
        <Icon circular color="teal" name="users" />
        <Icon circular inverted name="users" />
        <Icon circular inverted color="teal" name="users" />
      </Segment>
      <Segment>
        <h2>Bordered Icons</h2>
        <p>Podemos hacer que los iconos tengan un borde cuadrado usando <b>bordered</b></p>
        <Icon bordered name="users" />
        <Icon bordered color="teal" name="users" />
        <Icon bordered inverted color="black" name="users" />
        <Icon bordered inverted color="teal" name="users" />
      </Segment>
      <Segment>
        <h2>Size in Icons</h2>
        <p>Podemos cambiar el tamaño de los iconos usando <b>size=""</b></p>
        <Icon name="user" size="tiny" />
        <Icon name="user" size="mini" />
        <Icon name="user" size="small" />
        <Icon name="user" size="small" />
        <br />
        <Icon name="user" />
        <br />
        <Icon name="user" size="large" />
        <br />
        <Icon name="user" size="big" />
        <br />
        <Icon name="user" size="huge" />
        <br />
        <Icon name="user" size="massive" />
      </Segment>
    </Segment>
  );
};

export default IconExamples;
