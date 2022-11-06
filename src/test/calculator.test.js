const Calculator = require("../calculator");

describe("calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("add", () => {
    cal.add(50);
    expect(cal.value).toBe(50);
  });

  it("subtract", () => {
    cal.add(50);
    cal.subtract(25);
    expect(cal.value).toBe(25);
  });

  it("multipley", () => {
    cal.add(50);
    cal.subtract(25);
    cal.multiply(2);
    expect(cal.value).toBe(50);
  });

  describe("divides", () => {
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });

  it("exception", () => {
    cal.add(50);
    cal.subtract(25);
    cal.multiply(5);
    expect(() => cal.add(5)).toThrow("Value can not be greater than 100");
  });
});
