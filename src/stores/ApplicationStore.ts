import { makeAutoObservable } from "mobx";

export class ApplicationStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter -= 1;
  };
}
