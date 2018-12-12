import { observable, action } from "mobx";

export class ApplicationStore {
  @observable
  counter = 0;

  @action
  increment = () => {
    this.counter += 1;
  };

  @action
  decrement = () => {
    this.counter -= 1;
  };
}
