import { expect } from "chai";

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}
let car: Car;
beforeEach(() => {
  car = new Car();
});

describe("Car", () => {
  it("can park", async () => {
    expect(car.park()).to.equal("stopped");
  });
  it("can drive", async () => {
    expect(car.drive()).to.equal("vroom");
  });
});
