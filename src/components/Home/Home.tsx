import * as React from "react";
import { Button, Container, NumberDisplay } from "./styles";

interface HomeProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export class Home extends React.Component<HomeProps, {}> {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <Container>
        <Button onClick={decrement}>-</Button>
        <NumberDisplay>{counter}</NumberDisplay>
        <Button onClick={increment}>+</Button>
      </Container>
    );
  }
}
