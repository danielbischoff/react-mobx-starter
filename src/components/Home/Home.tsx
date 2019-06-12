import { observer } from "mobx-react";
import * as React from "react";
import { AppContext } from "../../AppContext";
import { Button, Container, NumberDisplay } from "./styles";

interface Props {}

export const Home = observer(function(props: Props) {
  const { applicationStore } = React.useContext(AppContext);

  return (
    <Container>
      <Button onClick={applicationStore.decrement}>-</Button>
      <NumberDisplay data-testid="counter-value">
        {applicationStore.counter}
      </NumberDisplay>
      <Button onClick={applicationStore.increment}>+</Button>
    </Container>
  );
});
