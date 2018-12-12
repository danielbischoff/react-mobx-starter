import { ApplicationStore } from "./ApplicationStore";

test("that counters initial value is zero", () => {
  const applicationStore = new ApplicationStore();

  expect(applicationStore.counter).toBe(0);
});

test("that increment, increments counter by one", () => {
  const applicationStore = new ApplicationStore();

  applicationStore.increment();

  expect(applicationStore.counter).toBe(1);
});

test("that decrement, decrements counter by one", () => {
  const applicationStore = new ApplicationStore();

  applicationStore.decrement();

  expect(applicationStore.counter).toBe(-1);
});
