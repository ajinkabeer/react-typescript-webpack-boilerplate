import { UseCounter } from "../hooks/useCounter";
import { act, renderHook } from "@testing-library/react-hooks";

describe("Increment", () => {
  it("increment count by 1", () => {
    const { result } = renderHook(UseCounter);
    act(() => {
      result.current.increase();
    });
    expect(result.current.count).toBe(1);
  });
  it("decrement count by 1", () => {
    const { result } = renderHook(UseCounter);
    act(() => {
      result.current.decrease();
    });
    expect(result.current.count).toBe(-1);
  });
});
