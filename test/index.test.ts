import { vague } from "../src";

describe("vague", () => {
  it("happy path", () => {
    let x: number | null = 1;
    let y: number | undefined = 2;
    expect(vague(($) => $(x) + $(y))).toBe(3);
  });

  describe("empty value", () => {
    it("null", () => {
      let x: number | null = null;
      let y: number | undefined = 2;
      expect(vague(($) => $(x) + $(y))).toBe(null);
    });

    it("undefined", () => {
      let x: number | null = 1;
      let y: number | undefined = undefined;
      expect(vague(($) => $(x) + $(y))).toBe(undefined);
    });
  });

  describe("throw", () => {
    it("Error", () => {
      expect(() =>
        vague(() => {
          throw new Error();
        })
      ).toThrow(Error);
    });

    it("TypeError", () => {
      expect(() =>
        vague(() => {
          throw new TypeError();
        })
      ).toThrow(TypeError);
    });
  });
});
